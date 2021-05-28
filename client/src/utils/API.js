import axios from 'axios';

const API = {
    getBooks: () => {
        return axios.get('/api/books')
    },
    postBook: (postData) => {
        return axios.post('/api/books', postData)
    },
    deleteBook: (id) => {
        return axios.delete(`/api/books/${id}`)
    },
    searchBooks: (query) => {
        return axios.get(`/api/books/google/${query}`)
    }
};

export default API;
