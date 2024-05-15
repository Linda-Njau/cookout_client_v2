import { useState } from 'react';
import { Link } from 'react-router-dom';
import { postData } from './httpService';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                email: email,
                password: password,
                username: username,
            };
            const response = await postData('/users', payload);
            console.log('Response:', response);
            localStorage.setItem('token', response.access_token);
            localStorage.setItem('user_id', response.user_id);

            window.dispatchEvent(new Event('storage'));
        } catch (error) {
            console.log(`This is the Error: ${error}`)
           if (error.response?.data?.error){
            const errorData = error.response.data.error;
            console.log(`This is the errorData: ${errorData}`);
            const errorMessages = errorData.split(';').map(msg => msg.trim());
            console.log(`This are the error messages: ${errorMessages}`);
           
           setPasswordError('');
           setUsernameError('');
           setEmailError('');

           if (errorMessages.includes('Password must be at least 8 characters')) {
            setPasswordError('Password must be at least 8 characters long');
        } if (errorMessages.includes('please provide a password')) {
            setPasswordError("Please provide a password")
        } if (errorMessages.includes('Username already in use')) {
            setUsernameError('Username already in use.');
        } if (errorMessages.includes("Please provide a username")) {
            setUsernameError("Please provide a username")
        } if (errorMessages.includes('Please provide a valid email address')){
            setEmailError("Please provide a valid email address")
        } if (errorMessages.includes('Email address already in use')) {
             setEmailError('Email already in use.');
        } if (errorMessages.includes('Invalid email format')) {
            setEmailError('Invalid email format');
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
