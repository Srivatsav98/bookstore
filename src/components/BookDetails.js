import React from 'react';

const BookDetails = (props) => {
    return (
      <div className="media overflow-auto">
        <div className="media-top">
          <a href="#">
            <img className="media-object" height="200" src="http://placehold.it/200x280" alt="Placehold" />
          </a>
        </div>
        <div className="media-body">
         
          <ul>
          <h4>{props.book.title}</h4>
            <li>Author:  {props.book.author}</li>
            <li>Price:  ${props.book.price}</li>
            <li>Year:  {props.book.year}</li>
            <br/>
            <button className="btn btn-primary" onClick={e => props.addToCart(props.book)}>Buy</button>
          </ul>
        </div>
      </div>
    );
};


export default BookDetails;
