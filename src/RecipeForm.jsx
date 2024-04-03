import { useState } from 'react';
import './RecipeForm.css';
import { postData, putData } from './httpService';


const RecipeForm = ({recipe, setEditRecipe, onSuccess }) => { 
    const [formData, setFormData] = useState({
        title: recipe ? recipe.title : '',
        ingredients: recipe ? recipe.ingredients : '',
        instructions: recipe ? recipe.instructions : '',
        preparationTime: recipe ? recipe.preparation_time : '',
        cookingTime: recipe ? recipe.cooking_time : '',
        calories: recipe ? recipe.calories : '',
        servings: recipe ? recipe.servings : '',
        tags: recipe && Array.isArray(recipe.tags) ? recipe.tags.join(', ') : '',
        hidden: recipe ? !recipe.hidden : false

    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = recipe ? await putData(formData, recipe.id) :
                        await postData('/recipes',formData);
            console.log(data);
            /*onSuccess();*/
            setFormData({
                user_id: "1",
                title: '',
                ingredients: '',
                instructions: '',
                preparationTime: '',
                cookingTime: '',
                calories: '',
                servings: '',
                tags: '',
                hidden: false,
            });
            onSuccess();
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log('Name:', name);
        console.log('Value:', value)
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <div className="recipe-page">
            <div className="recipe-list"> 
            </div>
            <div className ="recipe-form">
                <h2>{recipe ? 'Edit Recipe' : 'Create New Recipe'}</h2>
                <form onSubmit={handleSubmit}>
                <label>Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                    
                    <label>Ingredients:</label>
                    <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} />
                    
                    <label>Instructions:</label>
                    <textarea name="instructions" value={formData.instructions} onChange={handleChange} />
                    
                    <label>Preparation Time (mins):</label>
                    <input type="number" name="preparationTime" value={formData.preparationTime} onChange={handleChange} />
                    
                    <label>Cooking Time (mins):</label>
                    <input type="number" name="cookingTime" value={formData.cookingTime} onChange={handleChange} />
                    
                    <label>Calories:</label>
                    <input type="number" name="calories" value={formData.calories} onChange={handleChange} />
                    
                    <label>Servings:</label>
                    <input type="number" name="servings" value={formData.servings} onChange={handleChange} />
                    
                    <label>Tags:</label>
                    <input type="text" name="tags" value={formData.tags} onChange={handleChange} />
                    
                    <label>Date:</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} />
                    
                    <label>Hidden:</label>
                    <input type="checkbox" name="hidden" checked={formData.hidden} onChange={() => setFormData(prevState => ({ ...prevState, hidden: !formData.hidden }))} />
                    <button type="submit">{recipe ? 'Update Recipe' : 'Create Recipe'}</button>
                </form>
                {recipe && <button onClick={() => setEditRecipe(null)}>Cancel</button>}
            </div>
        </div>
    );
};

export default RecipeForm

