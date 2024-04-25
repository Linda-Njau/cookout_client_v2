import { useState, useEffect } from 'react';
import { fetchFollowedRecipes } from './httpService';

const FollowedRecipes = ({ userId }) => {
    const [recipes, setRecipes ] = useState([]);

    useEffect(() => {
        const getFollowedRecipes = async () => {
            try {
                const fetchedFollowedRecipes = await fetchFollowedRecipes(userId);
                setRecipes(fetchedFollowedRecipes);
            } catch (error) {
                console.error(error);
            }
        };
        getFollowedRecipes();
    }, [userId]);

    return (
        <div>
            <h2>Followed Recipes</h2>
            <div className="recipe-list">
                {recipes.map(recipe => (
                    <div key={recipe.id} className="recipe">
                        <h3>{recipe.title}</h3>
                        <p>Ingredients: {recipe.ingredients}</p>
                        <p>Instructions: {recipe.instructions}</p>
                        <p>Preparation Time: {recipe.preparation_time}</p>
                        <p>Cooking Time: {recipe.cooking_time}</p>
                        <p>Calories: {recipe.calories}</p>
                        <p>Servings: {recipe.servings}</p>
                        <p>tags: {recipe.tags}</p>
                    </div>
                ))}
            </div>
        </div>
    );
 }

 export default FollowedRecipes;
