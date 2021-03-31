import React from 'react';
import { FaCross, FaTimes } from 'react-icons/fa';

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
               />
          </div>
        </div>
        <br/>
        <div className="input-group">
          <label className="col-sm-3 control-label">Credit Card </label>
          <div className="col-sm-2">
            <input required="true"
              type="radio"
              name="paymentType"
              value="credit"
              ref={node => payment = node}
               />
          </div>
        </div>
        <br/>
        <div className="input-group">
          <label className="col-sm-3 control-label">Internet Banking</label>
          <div className="col-sm-2">
            <input required="true"
              type="radio"
              name="paymentType"
              value="internet"
              ref={node => payment = node}
               />
          </div>
        </div>
        <br/>
        <div className="input-group">
          <label className="col-sm-3 control-label">UPI</label>
          <div className="col-sm-2">
            <input required="true"
              type="radio"
              name="paymentType"
              value="upi"
              ref={node => payment = node}
               />
          </div>
        </div>
        <br/>
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