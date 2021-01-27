import React from 'react';
import './stripe-element.styles.css';

const StripeElement = () =>{
    return (
      <div className="stripe">
          <h2 className="title-payement">PAYEMENT</h2>
          <div className="payement-details">
            <div className="accept">
                <p>We accept : </p>
            </div>
          </div>
      </div>
    )
}

export default StripeElement;