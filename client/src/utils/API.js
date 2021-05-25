import axios from "axios";

export default {
  // Gets all books
  getBooks: function(bookName) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+bookName);
  },

};
