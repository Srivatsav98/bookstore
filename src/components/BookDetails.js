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

           { props.cartBooks.indexOf(props.book)===-1  && <button className="btn btn-primary" onClick={e => props.addToCart(props.book)}>Buy</button>}
           { props.cartBooks.indexOf(props.book)>-1  && <button className="btn btn-danger" onClick={e => props.removeFromCart(props.book)}>Remove</button>}
          </ul>
        </div>
      </div>
    );
};


export default BookDetails;
