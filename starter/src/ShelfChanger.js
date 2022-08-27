let ShelfChanger = ({book,update}) =>{
    let select = (value,book) => (update(book,value))
    return(
            <select value={book.shelf||"none"} onChange={(event)=>select(event.target.value,book)}>
            <option value="move" disabled>Move TO</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
            </select>
    )
}
export default ShelfChanger