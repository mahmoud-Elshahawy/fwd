import { useState } from "react"
import {Link} from "react-router-dom"
import BooksList from "./BooksList"
import * as BooksAPI from "./BooksAPI"
let Search = () =>{
    let [books,setbooks]=useState([]);
    let query = (query) => {
       let result = (BooksAPI.search(query))
       setbooks(result)
       console.log(result)
    }
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to="/"
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={(event)=>query(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <BooksList books={books}/>
          </div>
        </div>
    )
}

export default Search