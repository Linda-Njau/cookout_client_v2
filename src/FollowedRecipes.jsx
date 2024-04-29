import { useState, useEffect } from 'react';
import { fetchFollowedRecipes } from './httpService';
import Recipe from './Recipe';

const FollowedRecipes = ({ userId }) => {
    const [recipes, setRecipes ] = useState([]);

    useEffect(() => {
        const getFollowedRecipes = async () => {
            try {
                const fetchedFollowedRecipes = await fetchFollowedRecipes(userId);
                if (Array.isArray(fetchedFollowedRecipes)) {
                    setRecipes(fetchedFollowedRecipes);
                } else {
                    console.error('Data returned from fetchFollowedRecipes is not an array:', fetchedFollowedRecipes);
                }
               
            } catch (error) {
                console.error(error);
            }
        };
        getFollowedRecipes();
    }, [userId]);

    return (
        <div>
            <h2>Followed Recipes</h2>
            <Recipe recipes={recipes} userId={userId}/>
    
        </div>
    );
 }

 export default FollowedRecipes;
