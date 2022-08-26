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
    BooksAPI.update(book,newShelf)
    books.find(b => b.title===book.title).shelf=newShelf
    setUpdate(!update);
  }
  return (
    <Routes>
      <Route exact path="/" element={<Shelf books={books} shelfs={shelfs} onChange={onChange}/>} />
      <Route exact path="/search" element={<Search />} />
    </Routes>
    
  );
}

export default App;
