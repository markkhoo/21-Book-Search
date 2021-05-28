import React, { useContext, useState } from "react";
import axios from "axios"
import Header from "../components/header/Header"
import CardContainer from "../components/cardComponent/cardContainer"
import "./search.css"

function Search() {
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [books, setBooks] = useState([]);

  const handleSetInput = (event) => {
    console.log("*********input", event.target.value);
    setInput(event.target.value)
  }

  const handleBookSearch = () => {
    console.log("*********book")
    //get  book data from server route
    axios.get(`/api/books/google/${input}`).then((res) => {
      console.log("*******", res)
    });
  }

// const renderProjectCards = () => {
//   let result = null;
//   if (books) {
//     result = books.map((book) => {
//       if (book) {
//         return (
//           <CardContainer 
//                         key={book.volumeInfo.title}
//                         book={book}
//           />
//         )
//       }
//       return null;
//     });
//   }
//   return result;
// }

  return (
    <div>
      <Header />
      {/* ---------Search field-------- */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for books"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={handleSetInput}
          />
          <div className="input-group-append">
            <button onClick={handleBookSearch} className="btn btn-outline-secondary" type="button" id="button-addon2">Search For Books</button>
          </div>
        </div>
      {/* ---------CARD---------- */}
      <CardContainer />
      {renderProjectCards()}

    </div>

  );
}

export default Search;
