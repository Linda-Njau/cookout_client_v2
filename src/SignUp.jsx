import { useState } from 'react';
import { Link } from 'react-router-dom'
import { postData } from './httpService';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

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
        } catch (error) {
            console.log(error);
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
                    <label>
                    Email:
                    <input 
                       type="text"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                </label>
                <label>
                    Password:
                    <input 
                       type="text"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                    />
                </label> 
                <button type="submit">Create Account</button>
                <p>already have an accunt? <Link to="/Login">Login</Link></p>
            </form>
        </div>
    )
}
export default SignUp
