import React from 'react';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import WarningIcon from '@material-ui/icons/Warning';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-element.styles.css';
import {connect} from 'react-redux';
import {selectTotalPrice} from '../../redux/cartitems/cartitems.selectors';
import {cleanCartItems} from '../../redux/cartitems/cartitems.actions';
const StripeElement = ({price, cleanCartItems}) =>{
  const priceForStripe = price * 100;
  const publishableKey = '';
  const onToken = () => {
    cleanCartItems();
      alert("Payment Successful");
  }
    return (
      <div className="stripe">
      <h2>PAYMENT</h2>
      <div className="details-payement">
        <div className="stripe__header">
        <div className="flex">
         <LocalShippingIcon fontSize="large" style={{color: 'rgb(252, 206, 13)'}}/>
         <p>Money Back Guarantee</p>
         </div>
         <div className="flex">
         <MonetizationOnIcon fontSize="large"style={{color: 'rgb(252, 206, 13)'}}/>
         <p>Free Repair Guarantee</p>
         </div>
        </div>
        <StripeCheckout
            className="stripe-btn"
            label={`Pay Now ${price}$`}
            name="earTouch Ltd."
            billingAddress
            shippingAddress
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            disabled={price ? false : true}
        />
        <div className="bottom">
          <WarningIcon fontSize="large" style={{color: 'rgb(252, 206, 13)'}}/>
        <p>We won't post anything anywhere</p>
        </div>
      </div>
  </div>
    )
}
const mapStateToProps = state =>({
  price : selectTotalPrice(state)
})
const mapDispatchToProps = dispatch =>({
  cleanCartItems : () => dispatch(cleanCartItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(StripeElement);
