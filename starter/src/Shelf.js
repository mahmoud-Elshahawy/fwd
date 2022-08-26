import BooksList from "./BooksList"
import {Link} from "react-router-dom"
let Shelf = ({books,shelfs,onChange}) => {
    let shelfChange = (book,shelf) => (onChange(book,shelf))
return (
    <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
{shelfs.map((shelf => (
    <div className="book-shelf" key={shelf}>
        <h2>{shelf}</h2>
        <div className="bookshelf-books">
                <BooksList books={books} shelf={shelf} shelfChange={shelfChange}/>
            </div>
    </div>
)))}
</div>
          </div>
          <div className="open-search">
            <Link to="/search">Search a book</Link>
          </div> 
          </div>
)

}

export default Shelf