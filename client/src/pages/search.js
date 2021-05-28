import React, { useContext, useState } from "react";
import API from "../utils/API";
import Header from "../components/header/Header"
import "./search.css"
import { List, ListItem } from "../components/List";



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
    API.searchBooks(input).then((res) => {
      setBooks(res.data)
      console.log("*******", res)
    });
  }

  const handleBookSave = (book) => {
    console.log(book);
    API.postBook(book)
      .then(function (response) {
        console.log(response);
      })
  }

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
      {books.length ? (
        <List>
          {books.map(book => {
            return (
              <ListItem key={book._id}>
                <div>
                  <div className="container">
                    <div className="card mb-3">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img src={book.volumeInfo.imageLinks.thumbnail} alt="..." />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{book.volumeInfo.title}</h5>
                            <p className="card-text">{book.volumeInfo.description}</p>
                            <p className="card-text"><small className="text-muted">{book.volumeInfo.authors}</small></p>
                            <button 
                              onClick={() => handleBookSave({
                                title: book.volumeInfo.title,
                                author: book.volumeInfo.authors.toString(),
                                description: book.volumeInfo.description,
                                image: book.volumeInfo.imageLinks.thumbnail,
                                link: book.volumeInfo.infoLink
                              })} 
                              className="btn btn-outline-secondary" 
                              type="button" 
                              id="button-addon2">save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <h3>No Results to Display</h3>
      )}

      {/* {books.length ? (  

        {
          books.map(post => (
            <div>
            <div className="container">
              
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="{book.name}" alt="..."/>
                  </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{book.name}</h5>
                        <p className="card-text">{book.description}</p>
                        <p className="card-text"><small className="text-muted">{book.name}</small></p>
                      </div>
                    </div>
                  </div>
                </div>
      
              </div>
            </div>
          )
        }
     )} */}




      {/* { books.length ? (
               
              {books.map(book => {
                return (
                  <CardContainer />
                );
              })}

      )} */}


    </div>

  );
}

export default Search;
