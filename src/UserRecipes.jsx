import { useState, useEffect } from 'react';
import RecipeForm from './RecipeForm';
import { fetchRecipes } from './httpService'

const UserRecipes = () => {
    const [recipes, setRecipes ] = useState([]);
    const [editRecipe, setEditRecipe] = useState(null);


    const fetchUserRecipes = async () => {
        try {
            const user_id = "1";
            const recipesData = await fetchRecipes(user_id);
            setRecipes(recipesData);
        } catch (err) {
            console.error(err);
    }
};

    useEffect(() => {
        fetchUserRecipes();
}, []);

    const handleEditRecipe = (recipe) => {
        setEditRecipe(recipe);
    };


    const handleEditSuccess = () => {
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
        {!editRecipe && <RecipeForm onSuccess={handleEditSuccess}  />}
        {editRecipe && <RecipeForm recipe={editRecipe} setEditRecipe={setEditRecipe} onSuccess={handleEditSuccess}/>}
    </div>
);
};
export default UserRecipes;
