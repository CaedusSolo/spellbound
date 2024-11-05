import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const registerUser = (userData) => api.post('/auth/register', userData)