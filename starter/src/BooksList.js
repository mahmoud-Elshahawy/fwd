import Books from "./Books"
let BooksList = ({books,shelf,shelfChange}) =>{
    let changer = (book,newshelf) => (shelfChange(book,newshelf))
    return(
        <ol className="books-grid">
                <Books books={books} shelf={shelf} shelfselect={changer}/>
        </ol>
    )
}
export default BooksList