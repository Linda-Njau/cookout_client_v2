import { useState } from 'react';
import { postData } from './httpService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
            setLoginError('Invalid username or password. Please try again')
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
                </label>
                <label>
                    password
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                <button type="submit">Login</button>
                {loginError && <p>{loginError}</p>}
    
                </label>
            </form>
        </div>
    )
}

export default Login;
