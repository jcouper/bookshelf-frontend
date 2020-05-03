import React, { Component } from 'react';
import './App.css';
import Library from './components/library';

export default class App extends Component{
  render(){
    return (
      <div className="App">
        <Library />
      </div>
    );
  }
}

