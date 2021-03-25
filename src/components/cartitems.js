import React from 'react';
import { FaCross, FaTimes } from 'react-icons/fa';

const CartItems = (props) => {
    let books=props.books;
    return (
        <div>
            
            <div style={{width:"70%",marginLeft:"20%"}}>
            <div className="row" style={{ marginBottom: "20px" }}>
                  <div className="col-8 overflow-auto"><h4>Title</h4></div>
                  <div className="col-4"><h4>Price</h4></div>
              </div>
            {books.map((b, i) => {
            return (
              <div className="row" key={i} style={{ marginBottom: "20px",paddingLeft:"5px" }}>
                  <div className="col-8 overflow-auto"><p>{b.title}</p></div>
                  <div className="col-2">{b.price}</div>
                  <div className="col-2"><FaTimes onClick={props.removeFromCart.bind(this,b)} style={{color:"red",cursor:"pointer"}}/></div>
              </div>
            );
          })}

<hr style={{borderBottom:"1px solid blue",marginRight:"120px"}}/>
        

            <div className="row" style={{ marginBottom: "20px" }}>
                  <div className="col-8 overflow-auto"><h5>Total</h5></div>
                  <div className="col-4"><h5>${books
  .map(item => item.price)
  .reduce((prev, curr) => prev + curr, 0)}</h5></div>
              </div>
          

              </div>

              <form>
              <div className="input-group">
          <div className="ml-auto mr-3">
            <input type="submit" className="btn btn-primary" value="Checkout"/>
          </div>
        </div>
      </form>
        </div>
    );
};

export default CartItems;
