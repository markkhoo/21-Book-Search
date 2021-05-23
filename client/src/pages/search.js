import React, { useContext, useState } from "react";
import axios from "axios"
function Search() {
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [books,setBooks] = useState([]);

  const handleSetInput = (event) => {
    console.log("*********input",event.target.value);
    setInput(event.target.value)
  }
  
  const handleBookSearch = () => {
    console.log("*********book")
    //get  book data from server route
    axios.get(`/api/books/google/${input}`).then((res) => {
      console.log("*******",res)
    });
  }



  return (

    <div className="input-group mb-3">
      <input 
        type="text" 
        className="form-control"
        placeholder="Recipient's username" 
        aria-label="Recipient's username" 
        aria-describedby="button-addon2"
        onChange={handleSetInput} 
      />
      <div className="input-group-append">
          <button onClick={handleBookSearch} className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
      </div>
    </div>


  );
}

export default Search;
