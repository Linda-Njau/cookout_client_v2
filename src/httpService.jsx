import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://127.0.0.1:5000',
});

export const postData = async (endpoint, data) => {
    try {
        const response = await httpClient.post(endpoint, data);
        return response.data;
    } catch (err) {
        throw new err;
    }
}
