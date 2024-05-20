import { useState, useEffect } from 'react';
import { fetchUserbyId } from './httpService';

const FetchUsernamebyId = ( { userId }) => {
    const [username, setUsername] = useState('');

useEffect(() => {
    const fetchUsernamebyId = async () => {
        try {
            const user = await fetchUserbyId(userId);
            setUsername(user.username);
        } catch (err) {
            console.error(err);
        }
    };
    fetchUsernamebyId();
}, [userId]);

return <span>{username}</span>
};
export default FetchUsernamebyId;
