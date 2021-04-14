
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
        

          
        <form className="debit-card">
  <div className="form-header">
    <h4 className="title">Debit card details</h4>
  </div>

  <div className="form-body">
  
    <input type="text" className="card-number" placeholder="Card Number"/>
    <input type="text" className="Name-CardHolder" placeholder="Name of the CardHolder"/>
    
  

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
        <option value="2016">2023</option>
          <option value="2017">2024</option>
          <option value="2018">2025</option>
          <option value="2019">2026</option>
          <option value="2020">2027</option>
          <option value="2021">2028</option>
          <option value="2022">2029</option>
          <option value="2023">2030</option>
          <option value="2024">2031</option>
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
 
  </div>
</form>
       
</div>

        <br></br>

        
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
    <h4 className="title">Credit card details</h4>
  </div>

  <div className="form-body">
  
    <input type="text" className="card-number" placeholder="Card Number"/>
    <input type="text" className="Name-CardHolder" placeholder="Name of the CardHolder"/>
  

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
          <option value="2016">2023</option>
          <option value="2017">2024</option>
          <option value="2018">2025</option>
          <option value="2019">2026</option>
          <option value="2020">2027</option>
          <option value="2021">2028</option>
          <option value="2022">2029</option>
          <option value="2023">2030</option>
          <option value="2024">2031</option>
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
        

        
        <form className="internetBanking">
  <div className="form-header">
    <h4 className="title">Internet Banking details</h4>
  </div>

  <div className="form-body">
  
    <input type="text" className="card-number" placeholder="Account Number"/>

    <input type="text" className="Name-CardHolder" placeholder="Name of the account holder"/>
  
    <input type="text" className="card-number" placeholder="IFSC Code"/>

    <input type="text" className="card-number" placeholder="Remarks "/>

  </div>
</form>
        
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
          
        <form className="upi">
  <div className="form-header">
    <h4 className="title">UPI details</h4>
  </div>

  <div className="form-body">
  
    <input type="text" className="card-number" placeholder="UPI ID or VPA"/>

    <input type="text" className="card-number" placeholder="Phone Number"/>


  </div>
</form>
        


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