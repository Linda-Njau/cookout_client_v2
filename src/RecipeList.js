const RecipeList = ({ recipes }) => {
    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <div key={recipe.id} className="recipe-card">
                    <h3>{recipe.title}</h3>
                </div>
            ))}
        </div>
    );
};
export default RecipeList
