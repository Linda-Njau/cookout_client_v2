import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://127.0.0.1:5000',
});

export const postData = async (endpoint, data) => {
    try {
        const response = await httpClient.post(endpoint, data);
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
