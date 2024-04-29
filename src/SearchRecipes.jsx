import { useState } from 'react';
import { fetchRecipesbyTags } from './httpService';
import Recipe from './Recipe';

const SearchRecipes = ( {userId} ) => {
    const [tags, setTags] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetchRecipesbyTags(tags);
            setSearchResults(response);
        } catch (err) {
            console.error('Error fetching recipes:', err);
        }
    };

    return (
        <div>
            <h2>Search Recipes by Tag</h2>
            <input
                type="text"
                placeholder="Enter Tags separated by commas"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        <div>
            <h3>Search Results:</h3>
            <Recipe recipes={searchResults} userId={userId}/>
        </div>
        </div>
    );
};
export default SearchRecipes;
