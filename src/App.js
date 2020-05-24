import React from 'react';
import './App.css';
import SearchBox from './SearchBox';
import CardList from './CardList';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({robots: users})});
  }
  
  render(){
    return (
      <div className="App">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={this.state.robots}/>
      </div>
    );
  }
}

export default App;
