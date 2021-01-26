import {Component} from 'react'

function Booklist(props){
    const mappedBooks = props.books.map((book, i) => <section className='booklist' key={i}>
        <img src={book.img} alt='book cover' className='image' onClick={(e) => props.addToShelf(book.title)}/>
        <p className='title'>{book.title}</p>
        <p className='author'>{book.author}</p>
    </section>)
    return(
        <div>{mappedBooks}</div>
    )
}




export default Booklist