import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postData } from './httpService';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                email: email,
                password: password,
                username: username,
            };
            const response = await postData('/users', payload);
            localStorage.setItem('token', response.access_token);
            localStorage.setItem('user_id', response.user_id);

            window.dispatchEvent(new Event('storage'));
            navigate('/')
        } catch (error) {
           if (error.response?.data?.errors){
            const errors = error.response.data.errors;
           
           setPasswordError('');
           setUsernameError('');
           setEmailError('');

            if (errors.passwordError) {
                setEmailError(errors.emailError);
            }
            if (errors.usernameError) {
                setUsernameError(errors.usernameError);
           }
           if (errors.passwordError){
                setPasswordError(errors.passwordError);
           }
        }
    }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <span className="error-message">{usernameError}</span>
                </label>
                <label>
                    Email:
                    <input 
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="error-message">{emailError}</span>
                </label>
                <label>
                    Password:
                    <input 
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="error-message">{passwordError}</span>
                </label> 
                <button type="submit">Create Account</button>
                <p>already have an account? <Link to="/Login">Login</Link></p>
            </form>
        </div>
    );
}    
export default SignUp
