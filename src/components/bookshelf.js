import React, { Component } from 'react';
import BookCard from './BookCard'

export default class Bookshelf extends Component {
    render(){
        const bookShelf = this.props.books.map(book => {
           return (<BookCard book={book} key={book.id}/> )
        })
        return(

            <div className='book-row'>
                <div className ='book'>
                    <h1>Bookshelf</h1>
                    {bookShelf}
                </div>
            </div>
        )
    }
}