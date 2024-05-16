import { useState } from 'react';
import { Link } from 'react-router-dom';
import { postData } from './httpService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = { username, password };
            const response = await postData('login', payload);
            localStorage.setItem('token', response.access_token);
            localStorage.setItem('user_id', response.user_id);

            window.dispatchEvent(new Event('storage'));
        }
        catch (error) {
            setUsernameError('');
            setPasswordError('');
            setLoginError('');

            if (error.response?.data?.errors) {
                const errors = error.response?.data?.errors
                
                if (errors.usernameError) {
                    setUsernameError(errors.usernameError);
                } 
                if (errors.passwordError) {
                    setPasswordError(errors.passwordError);
                }
                if (errors.loginError) {
                    setLoginError(errors.loginError);
                }
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <label>
                    Username
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {usernameError && <p className="error-message">{usernameError}</p>}
                </label>
                <label>
                    password
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <p className="error-message">{passwordError}</p>}
                    </label>
                <button type="submit">Login</button>
                {loginError && <p className="error-message">{loginError}</p>}
                <p>No account? <Link to="/SignUp">Sign Up</Link></p>
            </form>
        </div>
    )
}

export default Login;
