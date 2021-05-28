import axios from "axios"
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import "./search.css"
import React, { useContext, useEffect, useState } from "react";

import Header from "../components/header/Header"

function Saved() {

    const [books, setBooks] = useState([]);



    useEffect(()=>{
        axios.get('/api/books')
        .then((res) => {
          setBooks(res.data)
          console.log (res.data)
        });
    },[])








    const handleBookDelete = (book) => {
        console.log(book)
        axios.delete("/api/books/:id",{data:{ _id: book._id }})
        
    }

    
    
    
    
    
    
    
    
    
    
    return (
        <div>
            <Header />
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
                          <img src={book.image} alt="..." />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text">{book.description}</p>
                            <p className="card-text"><small className="text-muted">{book.author}</small></p>
                            <button onClick={ ()=> handleBookDelete(book) } className="btn btn-outline-secondary" type="button" id="button-addon2">delete</button>

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
        </div>
    )
}

export default Saved;