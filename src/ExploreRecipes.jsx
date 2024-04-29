import { useState, useEffect } from 'react';
import { fetchExploreRecipes } from './httpService';
import Recipe from './Recipe';

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
        <Recipe recipes={recipes} userId={userId}/>
    </div>
)
   
   
};
export default ExploreRecipes;
