import {useState, useEffect} from 'react';
import { checkIsFollowing, followUser, unfollowUser } from './httpService';

const isFollowing = ({ userId, targetUserId }) => {
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        const checkIsFollowing = async () => {
            try {
                const result = await checkIsFollowing(userId, targetUserId);
                setIsFollowing(result);
            } catch (err) {
                console.error('Error checking if user is following', err);
            }
        };
        checkIsFollowing();
    }, [userId, targetUserId]);

    const handleFollow = asynx () => {
        try {
            await followUser(userId, {followed_id: targetUserId});
            setIsFollowing(true);
        } catch (err) {
            console.error('Error checking following user', err);
        }
    };

    const handleUnfollow = async () => {
        try {
            await unfollowUser(userId, {followed_id: targetUserId});
            setIsFollowing(false);
        } catch (err) {
            console.error('Error unfollowing user', err);
        }
    };
    
    return (
        <div>
            {isFollowing ? (
                <button onClick={handleFollow}>Unfollow</button>
            ): (
                <button onClick={handleUnfollow}>Follow</button>
            )}
        </div>
    );
};

export default isFollowing
