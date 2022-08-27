import MyImage from "./add.svg"
import ShelfChanger from "./ShelfChanger"
let Books = ({books,shelf,shelfselect}) => {
    let myBooks=[];
    if(shelf){
    let myshelf = shelf.replace(/ /g, "");
    myBooks=(books.filter(b => b.shelf.toLowerCase() === myshelf.toLowerCase()))}
    else{
    if(!books)
        myBooks=[];
    else
        myBooks=books
    }
    let backgorundCheck = (book) => {
        if(book.hasOwnProperty('imageLinks'))
            return book.imageLinks.thumbnail
        else
        return MyImage
    }
    let selection = (book,value) => (shelfselect(book,value));
    return (
        myBooks.map(book => (
            <li key={book.authors}>
                <div className="book">
                <div className="book-top"><div className="book-cover" style={{
                        backgroundImage: `url(${backgorundCheck(book)})` ,
                        height: 193,
                        width: 128
                    }}></div>
                    <div className="book-shelf-changer">
                    <ShelfChanger book={book} update={selection} />
                    </div>
                    </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
                </div>
            </li>
    ))
    )
}
export default Books