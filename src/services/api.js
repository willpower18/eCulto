import axios from 'axios';

const api = axios.create({
    baseURL: 'https://172.16.3.40:5001/',
});

export default api;