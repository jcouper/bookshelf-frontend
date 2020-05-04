import React from 'react';
import { Card } from 'react-bootstrap';



export default function BookCard(props) {

    return(
        
        <Card key={props.key} >
            <Card.Img src={props.book.image}/>
            <Card.Body >
            <Card.Title>{props.book.title}</Card.Title>
            <Card.Text>{props.book.description}</Card.Text>
            <Card.Link href={props.book.amazon_product_url}>Buy on Amazon</Card.Link>
         </Card.Body>
        </Card>
        
    )
}