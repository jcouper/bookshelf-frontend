import BookCard from './BookCard'
import { CardDeck } from 'react-bootstrap';
import React from 'react';

export default function Favorites(props){
        const favorites = props.favorites.map(book => {
            return <BookCard book={book} key={book.id} action={props.action}/> 
        })

    return(
        <div>
            <h1>My Favorites</h1>
                 <CardDeck>
                     {favorites}
                 </CardDeck>
        </div>
    )
}
