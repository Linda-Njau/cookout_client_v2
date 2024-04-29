import { useState, useEffect } from 'react';
import { fetchExploreRecipes } from './httpService';
import FetchUsername from './FetchUsername';
import IsFollowing from './IsFollowing';

const ExploreRecipes = ( { userId }) => {
    const [recipes, setRecipes ] = useState([]);


useEffect(() => {
    const fetchRecipes = async () => {
        try {
            const data = await fetchExploreRecipes();
            setRecipes(data);
        } catch (err) {
            console.error(err);
    }
};
    fetchRecipes();
}, []);

return (
    <div>
        <h2>Explore Recipes</h2>
        <div className="recipe-list">
                {recipes.map(recipe => (
                    <div key={recipe.id} className="recipe">
                        <h3>{recipe.title}</h3>
                        <p>Author: <FetchUsername userId={recipe.user_id}/></p>
                        <p>Ingredients: {recipe.ingredients}</p>
                        <p>Instructions: {recipe.instructions}</p>
                        <p>Preparation Time: {recipe.preparation_time}</p>
                        <p>Cooking Time: {recipe.cooking_time}</p>
                        <p>Calories: {recipe.calories}</p>
                        <p>Servings: {recipe.servings}</p>
                        <p>tags: {recipe.tags}</p>
                        <IsFollowing userId={userId} targetUserId={recipe.user_id}/>
                    </div>
                ))}
            </div>
    </div>
)
};
export default ExploreRecipes;
