import {Component} from 'react'

function Shelf(props){
    const mappedTitle = props.shelf.map((book, index) => <h4 key={index}>{book}</h4>)
    return (
        <div>
            <h1>Shelf</h1>
            {mappedTitle}
            <button onClick={(e) => props.clearShelf()}>Clear Shelf</button>
        </div>

    )
}







export default Shelf