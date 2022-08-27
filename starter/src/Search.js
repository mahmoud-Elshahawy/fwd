import { useState } from "react"
import {Link} from "react-router-dom"
import BooksList from "./BooksList"
import * as BooksAPI from "./BooksAPI"
let Search = ({onChange,myBooks}) =>{
    let [books,setbooks]=useState([]);
    let query = (query) => {
        if(query==="")
        setbooks([]);
        else{
       BooksAPI.search(query).then((results)=> {
        myBooks.forEach(element => {
          if(results.find(r => r.id ===element.id)){
            results.find(b => b.title===element.title).shelf=element.shelf
          }
        });
        setbooks(results)
       })}
    }
    let searchupdate= (book,shelf)=>{onChange(book,shelf)}
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
            <BooksList books={books} shelfChange={searchupdate}/>
          </div>
        </div>
    )
}

export default Search