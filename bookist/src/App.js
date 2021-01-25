import logo from './logo.svg';
import {Component} from 'react'
import './App.css';
import Header from './Components/Header'
import Bookist from './Components/Booklist'
import Shelf from './Components/Shelf'
import data from './data'

class App extends Component{
  constructor(){
    super()
    this.state = {
      books: data
    }
  }
  render(){
    return (
      <div>
        <Header/>
        <Bookist books={this.state.books}/>
        <Shelf/>
      </div>
    )
  }
}

export default App;
