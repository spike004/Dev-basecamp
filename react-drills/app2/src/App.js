import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      DBZ: ['goku', 'vegeta', 'piccolo']}

  }
  
  render() {
    let chars = this.state.DBZ.map( (element, index) => {
      return (
        <h1 key={ index }>{ element }</h1>
      )
    })

    return (
      <div className="App">
        {chars}
      </div>
    );
  }
}

export default App;

