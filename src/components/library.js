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

    addBookToFavorties = book => {
        if (!this.state.favorites.find(bookToCheck => bookToCheck === book))
        this.setState({favorites: [...this.state.favorites, book]})
    }

    removeBookFromFavorites = book => {
        
        const newFavorites = (this.state.favorites.filter(bookToCheck => bookToCheck !== book))
        this.setState({favorites: newFavorites})
    }

    render(){
       return(
            <div className='library'>
            <Favorites favorites={this.state.favorites} action={this.removeBookFromFavorites}/> 
            <Bookshelf books={this.state.books} action={this.addBookToFavorties}/>
            </div>
        )
    }
}