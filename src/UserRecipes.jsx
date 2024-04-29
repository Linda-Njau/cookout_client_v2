import { useState, useEffect } from 'react';
import RecipeForm from './RecipeForm';
import { fetchRecipes } from './httpService'
import Recipe from './Recipe';

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
        <Recipe recipes={recipes} userId={userId}/>
        <button onClick={() => handleEditRecipe(recipes)}>Edit</button>
        {!editRecipe && <RecipeForm userId={userId} onSuccess={handleFormSuccess}  />}
        {editRecipe && <RecipeForm userId={userId} recipe={editRecipe} setEditRecipe={setEditRecipe} onSuccess={handleFormSuccess}/>}
    </div>
);
};
export default UserRecipes;
