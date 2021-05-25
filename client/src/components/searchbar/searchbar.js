import API from "../../utils/API";
import React, { useEffect, useState } from "react";
import { getBooks } from "../utils/actions";



const BooksRender = props => {
    const [book, setBook] = useState()

    // Load all books and store them with setBooks
    useEffect(() => {
        API.getBooks(bookName)
            .then(res => setBook())
            .catch(err => console.log(err));
    }, [])

    const addBookToDB = () => {
        setBook({
            type: ADD_FAVORITE,
            post: book.currentPost
          });
    }


    function googleBooks() {

        API.getBooks(bookName)
    }




    return (
        
        
        <div>
            <div className="card" style="width: 18rem;">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"></li>
                    <li className="list-group-item">{book.authors}</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                    
                </ul>
                <button className="btn btn-danger" onClick={addBookToDB}>
                    addBookToDB
                </button>

                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    )



}
