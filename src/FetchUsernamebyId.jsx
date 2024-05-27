import { useState, useEffect } from 'react';
import { fetchUserbyId } from './httpService';

const FetchUsername = ( { userId }) => {
    const [username, setUsername] = useState('');
    const [userError, setUserError] = useState('');

useEffect(() => {
    const fetchUsernamebyId = async () => {
        try {
            const user = await fetchUserbyId(userId);
            setUsername(user.username);
            setUserError('');
        } catch (error) {
            if (error.response?.data?.errors) {
               setUserError(error.response.data.errors)
            }
        } 
    };
    fetchUsernamebyId();
}, [userId]);

return (
    <div>
        {userError ? <span className="error-message">{userError}</span>: <span>{username}</span>}
    </div>
);
}
export default FetchUsername;
