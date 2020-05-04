import React, { Component } from 'react';
import BookCard from './BookCard'
import { CardDeck } from 'react-bootstrap';

export default class Bookshelf extends Component {
    render(){
        const bookShelf = this.props.books.map(book => {
           return (<BookCard book={book} key={book.id}/> )
        })
        return(

                    <CardDeck>
                        {bookShelf}
                    </CardDeck>

        )
    }
}