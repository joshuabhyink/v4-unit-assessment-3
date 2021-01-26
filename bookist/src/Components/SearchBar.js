import {Component} from 'react'

class SearchBar extends Component{
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
    }
    handleChange(userInput){
        this.setState({userInput: userInput})
    }
    handleClick(){
        this.props.filterBooks(this.state.userInput)
    }
    handleClear(){
        this.props.reset()
    }
    render(){
        console.log(this.state)
        return (
            <div>
                <input placeholder='Enter Title or Author...' onChange={(e) => this.handleChange(e.target.value)} value={this.state.userInput}/>
                <button onClick={(e) => this.handleClick()}>Search</button>
                <button onClick={(e) => this.handleClear()}>Clear Search</button>
            </div>
        )
    }
}

export default SearchBar 