import React,{ Component } from 'react';
import './App.css';
import List from './Components/List';

export default class App extends Component{
    
  
  render() {
    return (
      <div className="App">
        <h1>Your To Do List</h1>
       <List/>
  
      </div>
    )
  }
 
  
}
