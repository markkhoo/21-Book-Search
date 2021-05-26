<<<<<<< HEAD
import axios from "axios";

export default {
  // Gets all books
  getBooks: function(bookName) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+bookName);
  },

};
=======
import axios from 'axios';

const API = {
    getBooks: () => {
        return axios.get('/api/books')
    },
    postBook: () => {
        return axios.post('/api/books')
    },
    deleteBook: (id) => {
        return axios.delete(`/api/books/${id}`)
    },
    searchBooks: (query) => {
        return axios.get(`/api/books/google/${query}`)
    }
};

export default API;
>>>>>>> 3322c3f0a9e40012fe8b9f6ef698becffb11131e
