import React from 'react';
import { Component } from "react";
import Bookshelf from './Bookshelf';
import Favorites from './Favorites';




export default class Library extends Component {
    
        state = {
            bookshelf: [],
            favorites: []
        }

        componentDidMount(){
            fetch(`http://localhost:3000/books`)
               .then(response => response.json())
               .then(bookshelf => this.setState({bookshelf}))
        }

        render(){
       return(
            <div className='library'>
            <Favorites/> 
            <Bookshelf/>
            </div>
        )
    }
}