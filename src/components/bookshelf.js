import React, { Component } from 'react';
import BookCard from './BookCard'
import { CardDeck } from 'react-bootstrap';

export default class Bookshelf extends Component {
    render(){
        const bookShelf = this.props.books.map(book => {
           return <BookCard book={book} key={book.id} action={this.props.action}/> 
        })
        return(
                    <div>
                        <h1>My Bookshelf</h1>
                    <CardDeck>
                        {bookShelf}
                    </CardDeck>
                    </div>
        )
    }
}