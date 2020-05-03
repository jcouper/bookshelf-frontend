import React from 'react';
import { Component } from "react";
import Bookshelf from './Bookshelf';
import Favorites from './Favorites';


export default class Library extends Component {
    
    state = {
        books: [],
        favorites: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/books`)
            .then(response => response.json())
            .then(books => this.setState({books})
        )
    }

    render(){
       return(
            <div className='library'>
            <Favorites/> 
            <Bookshelf books={this.state.books}/>
            </div>
        )
    }
}