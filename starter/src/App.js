import "./App.css";
import { useState ,  useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Shelf from "./Shelf"
import {Route,Routes} from "react-router-dom"
import Search from "./Search"
function App() {
  let [books,setbooks] = useState([]);
  let [update,setUpdate] = useState(true);
  let shelfs = ["Currently Reading", "Want to Read" , "Read"];
  useEffect(() => {
    let getBooks = async () => {
      let result = await BooksAPI.getAll();
      setbooks(result);
    }
    getBooks();
  },
  [])
  let onChange = (book,newShelf) => {
    if(books.find(b => b.id === book.id)){
      BooksAPI.update(book,newShelf)
      books.find(b => b.title===book.title).shelf=newShelf
      setUpdate(!update);
    }
    else{
      BooksAPI.update(book,newShelf);
      let getBooks = async () => {
        let result = await BooksAPI.getAll();
        setbooks(result);
      }
      getBooks()
    }
  }
  return (
    <Routes>
      <Route exact path="/" element={<Shelf books={books} shelfs={shelfs} onChange={onChange}/>} />
      <Route exact path="/search" element={<Search onChange={onChange} myBooks={books}/>} />
    </Routes>
    
  );
}

export default App;
