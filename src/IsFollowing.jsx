import {useState, useEffect} from 'react';
import { checkIsFollowing,  followUser, unfollowUser } from './httpService';

const IsFollowing = ({ userId, targetUserId }) => {
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        const fetchIsFollowing = async () => {
            try {
                const result = await checkIsFollowing(userId, targetUserId);
                console.log(`This is the result of check is following: ${result}`);
                setIsFollowing(result);
            } catch (err) {
                console.error('Error checking if user is following', err);
            }
        };
        fetchIsFollowing();
    }, [userId, targetUserId]);

    const handleFollow = async () => {
        try {
            await followUser(userId, {followed_id: targetUserId});
            console.log('Follow');
            setIsFollowing(true);
        } catch (err) {
            console.error('Error checking following user', err);
        }
    };

    const handleUnfollow = async () => {
        try {
            await unfollowUser(userId, {followed_id: targetUserId});
            console.log('unFollow');
            setIsFollowing(false);
        } catch (err) {
            console.error('Error unfollowing user', err);
        }
    };
    
    return (
        <div>
            {isFollowing ? (
                <button onClick={handleUnfollow}>Unfollow</button>
            ): (
                <button onClick={handleFollow}>Follow</button>
            )}
        </div>
    );
};

export default IsFollowing
