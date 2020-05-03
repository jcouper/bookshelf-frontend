import React from 'react';



export default function BookCard(props) {

    return(
        <div className='book-card' key={props.key}>
            <h1>{props.book.title}</h1>
        </div>
    )
}