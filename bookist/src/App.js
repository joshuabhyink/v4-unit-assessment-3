import logo from './logo.svg';
import {Component} from 'react'
import './App.css';
import Header from './Components/Header'
import Booklist from './Components/Booklist'
import Shelf from './Components/Shelf'
import data from './data'
import SearchBar from './Components/SearchBar'

class App extends Component{
  constructor(){
    super()
    this.state = {
      books: data,
      shelf: []
    }
    this.clearShelf = this.clearShelf.bind(this)
  }
  addToShelf = (title) => {
    if(!this.state.shelf.includes(title)){
      this.setState({shelf: [...this.state.shelf, title]})
    }
  }
  clearShelf = () => {
    this.setState({shelf: []})
  }
  filterBooks = (input) => {
    const filteredBooks = this.state.books.filter((book) => book.title.includes(input) || book.author.includes(input))
    this.setState({books: filteredBooks})
    console.log(filteredBooks)
  }
  reset = () => {
    this.setState({books: data})
  }
  render(){
    return (
      <div>
        <Header/>
        <SearchBar filterBooks={this.filterBooks} reset={this.reset}/>
        <Booklist books={this.state.books} addToShelf={this.addToShelf}/>
        <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf}/>
      </div>
    )
  }
}

export default App;
