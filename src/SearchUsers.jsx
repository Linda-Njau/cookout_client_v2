import { useState } from 'react';
import { fetchUserbyUsername } from "./httpService";

const SearchUsers = () => {
    const [username, setUsername] = useState('');
    const [searchResults, setSearchResults] = useState(null);
}

const handleSearch = async () => {
    try {
        const user = await fetchUserbyUsername(username);
        setSearchResults(user);
    } catch (err) {
        console.error('Error fetching user:', err);
    }
}
