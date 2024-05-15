import { useNavigate } from 'react-router-dom';

const LogoutButton = ({setToken, setUserId}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');

        setToken(null);
        setUserId(null);
        navigate('/SignUp');
    }
        return (
            <button onClick={handleLogout}>Logout</button>
        );
    };
export default LogoutButton;
