import { useState } from 'react';
import { fetchUserbyUsername } from "./httpService";

const SearchUsers = () => {
    const [username, setUsername] = useState('');
    const [searchResults, setSearchResults] = useState(null);


const handleSearch = async () => {
    try {
        const user = await fetchUserbyUsername(username);
        setSearchResults(user);
    } catch (err) {
        console.error('Error fetching user:', err);
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
        {searchResults && (
            <div>
                <p>Username: {searchResults.username}</p>
                <p>User ID: {searchResults.id}</p>
            </div>
        )}
    </div>
);
};
export default SearchUsers;
