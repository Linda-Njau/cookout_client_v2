import { useState } from 'react';
import { fetchRecipesbyTags } from './httpService';

const SearchRecipes = () => {
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
            <ul>
                {searchResults.map((recipe) => (

                    <li key={recipe.id}>
                        <h4>title: {recipe.title}</h4>
                        <p>ingredients: {recipe.ingredients}</p>
                    <p>Instructions: {recipe.instructions}</p>
                    <p>Preparation time: {recipe.preparation_time}</p>
                    <p>cooking time: {recipe.cooking_time}</p>
                    <p>calories: {recipe.calories}</p>
                    <p>servings: {recipe.servings}</p>
                    <p>tags: {recipe.tags}</p>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};
export default SearchRecipes;
