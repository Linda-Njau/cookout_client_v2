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
export const putData = async (data, recipe_id) => {
    try{
        const response = await httpClient.put(`/recipes/${recipe_id}`, data);
        return response.data;
    } catch(err) {
        throw new Error('failed to edit recipe',err);
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

export const fetchExploreRecipes = async () => {
    try {
        const response = await httpClient.get(`/recipes`);
        return response.data;
    } catch (err) {
        throw new Error('Failed to fetch explore recipes', err);
    }

    }
export const fetchUserbyUsername = async (username) => {
    try{
        const response = await httpClient.get(`/users/${username}`);
        return response.data;
    } catch (err) {
        throw new Error('Failed to fetch users', err);
    }
}

export const fetchUserbyId = async (userId) => {
    try {
        const response = await httpClient.get(`/users/${userId}`);
        return response.data;
    } catch (err) {
        throw new Error('Failed to fetch user by id', err);
    }
}

export const fetchFollowedRecipes = async (user_id) => {
    try {
        const endpoint = `/users/${user_id}/followed_recipes`;
        const response = await httpClient.get(endpoint);
        return response.data
    } catch (err) {
        throw new Error('Failed to fetch recipes', err);
    }
};

export const checkIsFollowing = async (userId, targetUserId) => {
    try {
        const response = await httpClient.get(`/users/${userId}/is_following/${targetUserId}`)
        return response.data       
    } catch (err) {
        throw new Error('Failed to check if user is following', err)
    }
}

export const followUser = async (userId, data) => {
    try {
        const response = await httpClient.post(`/users/${userId}/follow`, data);
        console.log(`following user: ${response}`)
        return response.data;       
    } catch (err) {
        throw new Error('Could not follow user', err)
    }
}

export const unfollowUser = async (userId, data) => {
    try {
        const response = await httpClient.post(`/users/${userId}/unfollow`, data);
        console.log(`Unfollowing user: ${response}`)
        return response.data;       
    } catch (err) {
        throw new Error('Could not unfollow user', err)
    }
}
