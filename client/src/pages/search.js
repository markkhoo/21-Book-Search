import React, { useContext } from "react";
import Hero from "../components/hero"

import Searchbar from "../components/searchbar";
import CardContainer from "../cardContainer";
import axios from "axios"
function Search() {
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [books,setBooks] = useState([]);

  const handleSetInput = (event) => {
    setInput(event.target.value)
  }

  const handleBookSearch = () => {
    //get  book data from server route
    axios.post(`/api/books/google/${input}`).then((res) => {
      console.log("*******",res)
    });
  }



  return (

    <div class="input-group mb-3">
      <input 
        type="text" 
        class="form-control"
        placeholder="Recipient's username" 
        aria-label="Recipient's username" 
        aria-describedby="button-addon2"
        onChange={handleSetInput} 
      />
      <div class="input-group-append">
          <button onClick={handleBookSearch} class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
      </div>
    </div>


  );
}

export default Search;
