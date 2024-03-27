import { useState, useEffect } from 'react';
import { fetchRecipes } from './httpService';
import RecipeForm from './RecipeForm';

const UserRecipes = () => {
    const [recipes, setRecipes ] = useState([]);
    const [editRecipe, setEditRecipe] = useState(null);

useEffect(() => {
    const fetchUserRecipes = async () => {
        try{
            const user_id = 1;
            const recipesData = await fetchRecipes(user_id);
            setRecipes(recipesData);
        } catch(err){
            console.error('Error fetching recipes', err.message);
        }
    };
    fetchUserRecipes();
}, []);

    const handleEditRecipe = (recipe) => {
        setEditRecipe(recipe);
    };

return (
    <div>
        <h2>User Recipes</h2>
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
                    <button onClick={() => handleEditRecipe(recipe)}>Edit</button>
                </div>
            ))}
        </div>
        {!editRecipe && <RecipeForm />}
        {editRecipe && <RecipeForm recipe={editRecipe} />}
    </div>
);
};
export default UserRecipes;
