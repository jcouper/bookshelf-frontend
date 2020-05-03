import React from 'react';
import { Component } from "react";
import Bookshelf from './Bookshelf';
import Favorites from './Favorites';




export default class Library extends Component {
    render(){
        return(
            <div className='library'>
            <Favorites/> 
            <Bookshelf/>
            </div>
        )
    }
}