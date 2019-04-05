import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var i = 1;
    var newStyle = {
      fontSize : 35,
      color : '#FF0000'
    }
    return (
      <div className="App">
        <h1 style={newStyle}>Header</h1>
        <h2>Content</h2>
        <p>This is content data</p>
        <p>{1+1}</p>
        <p>{i === 1 ? 'var is 1' : 'false'}</p>
      </div>
    );
  }
}
export default App;