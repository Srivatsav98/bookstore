
import './PaymentPageStyle.css';
import React from 'react';
const PaymentPage = (props) => {
    let books=props.books;
    let payment=null;
    return (
<div>
<form onSubmit={e => {
            e.preventDefault();
             props.handlePToP();

            e.target.reset(); 
          }}
            className="form-horizontal"
      >


<p style={{fontWeight:'bold'}}>Please choose your Payment method :</p>
<br></br>
        <div className="input-group">
          <label className="col-sm-3 control-label">Debit Card </label>
          <div className="col-sm-2">
            <input required="true"
              type="radio"
              name="paymentType"
              value="debit"
              ref={node => payment = node}
              onClick={()=>{
                props.handlePaymentOption("debit");
              }}
               />
          </div>
        </div>
        <br/>
        <div hidden={props.paymentOption!="debit"}>
        //code
          
        </div><br></br>
        <div className="input-group">
          <label className="col-sm-3 control-label">Credit Card </label>
          <div className="col-sm-2">
            <input required="true"
              type="radio"
              name="paymentType"
              value="credit"
              ref={node => payment = node}
              onClick={()=>{
                props.handlePaymentOption("credit");
              }}
               />
          </div>
        </div>
        <br/>
        <div hidden={props.paymentOption!="credit"}>
        
        
        <form className="credit-card">
  <div className="form-header">
    <h4 className="title">Credit card detail</h4>
  </div>

  <div className="form-body">
  
    <input type="text" className="card-number" placeholder="Card Number"/>
    
  

    <div className="expiry-date">
        <p>Card Expiry Date</p>
      </div>
    <div className="date-field">
      <div className="month">
        <select name="Month">
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
      </div>
      <div className="year">
        <select name="Year">
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
 
    
    <div className="card-verification">
      <div className="cvv-input">
        <input type="text" placeholder="CVV"/>
      </div>
      <div className="cvv-details">
        <p>3 or 4 digits usually found <br/> on the signature strip</p>
      </div>
    </div>
 
    
    <button type="submit" className="proceed-btn"><a href="#">Proceed</a></button>
  
  </div>
</form>


      

        </div><br></br>
        <div className="input-group">
          <label className="col-sm-3 control-label">Internet Banking</label>
          <div className="col-sm-2">
            <input required="true"
              type="radio"
              name="paymentType"
              value="internet"
              ref={node => payment = node}
              onClick={()=>{
                props.handlePaymentOption("internet");
              }}
               />
          </div>
        </div>
        <br/>
        <div hidden={props.paymentOption!="internet"}>
        //code
        
        </div><br></br>
        <div className="input-group">
          <label className="col-sm-3 control-label">UPI</label>
          <div className="col-sm-2">
            <input required="true"
              type="radio"
              name="paymentType"
              value="upi"
              ref={node => payment = node}
              onClick={()=>{
                props.handlePaymentOption("upi");
              }}
               />
          </div>
        </div>
        <br/>
        <div hidden={props.paymentOption!="upi"}>
          
          //code
        </div><br></br>
        <div className="input-group">
        <div className="input-group">
          <div className="ml-auto mr-3">
           <input type="submit"  className="btn btn-primary" value="Proceed to Pay"/>
          </div>
        </div>
        </div>
        <br/>
        
</form>
</div>
    );
};

export default PaymentPage;