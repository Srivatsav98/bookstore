import React from 'react';
import "./cartItems.css"
import { FaCross, FaMinus, FaPlus, FaTimes } from 'react-icons/fa';

const CartItems = (props) => {
    let books=props.books;
    return (
        <div>
            
            <div style={{width:"70%",marginLeft:"20%"}}>
            <div className="row" style={{ marginBottom: "20px" }}>
                  <div className="col-6 overflow-auto"><h4>Title</h4></div>
                  <div className="col-6"><h4>Price</h4></div>
              </div>
            {books.map((b, i) => {
            return (
              <div className="row" key={i} style={{ marginBottom: "20px",paddingLeft:"5px" }}>
                  <div className="col-6 overflow-auto"><p>{b.title}</p></div>
                  <div className="col-2">{b.price}</div>
                  <div className="col-3 quantity">
                  <button className="plus-btn quantbtn" type="button" style={{color:"MidnightBlue"}} name="button" onClick={()=>{props.handleQuantity(b,1)}}>
                    <FaPlus></FaPlus>
                  </button>
                  <input type="text" name="name" value={b.count}/>
                  <button className="minus-btn quantbtn" type="button" style={{color:"Salmon"}} name="button" onClick={()=>{props.handleQuantity(b,-1)}}>
                    <FaMinus></FaMinus>
                  </button>
                   </div>
                  <div className="col-1"><FaTimes onClick={props.removeFromCart.bind(this,b)} style={{color:"red",cursor:"pointer"}}/></div>
              </div>
            );
          })}

<hr style={{borderBottom:"1px solid blue",marginRight:"120px"}}/>
        

            <div className="row" style={{ marginBottom: "20px" }}>
                  <div className="col-6 overflow-auto"><h5>Total</h5></div>
                  <div className="col-6"><h5>${books.reduce((prev, curr) => prev + curr.price*curr.count, 0)}</h5></div>
              </div>
          

              </div>

              <form  onSubmit={e => { e.preventDefault();props.handleCO(); e.target.reset();}}>
              <div className="input-group">
          <div className="ml-auto mr-3">
           <input type="submit" disabled={books.length==0} className="btn btn-primary" value="Checkout"/>
          </div>
        </div>
      </form>
        </div>
    );
};

export default CartItems;
