import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.eculto.com.br/',
});

export default api;