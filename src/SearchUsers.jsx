import { useState } from 'react';
import { fetchUserbyUsername } from "./httpService";
import IsFollowing from './IsFollowing';

const SearchUsers = ({ userId }) => {
    const [username, setUsername] = useState('');
    const [userError, setUserError] = useState('');
    const [searchResults, setSearchResults] = useState(null);


const handleSearch = async () => {
    try {
        setSearchResults(null);
        setUserError('');
        const user = await fetchUserbyUsername(username);
        setSearchResults(user);
 
    } catch (error) {
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        setUserError('');
        if (errors.userError) {
            setUserError(errors.userError);
        }
      }
    }
};
return (
    <div>
        <h2>Search User</h2>
        <input 
            type="text"
            placeholder="Enter User Name"
            value = {username}
            onChange ={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {userError && <p className="error-message">{userError}</p>}
        {searchResults && (
            <div>
                <p>Username: {searchResults.username}</p>
                <IsFollowing userId={userId} targetUserId={searchResults.id} />
            </div>
        )}
    </div>
);
};
export default SearchUsers;
