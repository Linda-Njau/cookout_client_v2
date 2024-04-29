import { useState, useEffect } from 'react';
import RecipeForm from './RecipeForm';
import { fetchRecipes } from './httpService'

const UserRecipes = ( { userId }) => {
    const [recipes, setRecipes ] = useState([]);
    const [editRecipe, setEditRecipe] = useState(null);


    const fetchUserRecipes = async () => {
        try {
            const recipesData = await fetchRecipes(userId);
            setRecipes(recipesData);
        } catch (err) {
            console.error(err);
    }
};

    useEffect(() => {
        fetchUserRecipes();
}, [userId]);

    const handleEditRecipe = (recipe) => {
        setEditRecipe(recipe);
    };


    const handleFormSuccess = () => {
        setEditRecipe(null);
        fetchUserRecipes();
    }


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
        {!editRecipe && <RecipeForm userId={userId} onSuccess={handleFormSuccess}  />}
        {editRecipe && <RecipeForm userId={userId} recipe={editRecipe} setEditRecipe={setEditRecipe} onSuccess={handleFormSuccess}/>}
    </div>
);
};
export default UserRecipes;
