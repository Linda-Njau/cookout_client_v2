import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://127.0.0.1:5000',
});

export const postData = async (endpoint, data) => {
    try {
        const user_id = "1"
        const payload = {...data, user_id: user_id}
        const response = await httpClient.post(endpoint, payload);
        console.log(response.data);
        return response.data;
        
    } catch (err) {
        console.log(err);
    }
}

export const fetchRecipes = async (user_id) => {
    try {
        const endpoint= `/users/${user_id}/recipes`
        const response = await httpClient.get(endpoint);
        return response.data;
    } catch (err) {
        throw new Error("failed to fetch recipes", err);
    }
}

export const fetchRecipesbyTags = async (tags) => {
    try {
        const response = await httpClient.get(`/recipes?tags=${tags}`);
        return response.data;
    } catch (err) {
        throw new Error('Failed to search recipes', err);
    }
};

export const putData = async (data, recipe_id) => {
    try{
        const response = await httpClient.put(`/recipes/${recipe_id}`, data);
        return response.data;
    } catch(err) {
        throw new Error('failed to edit recipe',err);
    }
}
