import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import './checkout-page.styles.css';
import {connect} from 'react-redux';
import {selectCart, selectTotalPrice} from '../../redux/cartitems/cartitems.selectors';
import CartEdit from '../../components/cart/cart.component';
import StripeElement from '../../components/stripe-element/stripe-element.component';

const useStyles = makeStyles({
    checkoutGrid:{
        padding: '1em 0',
        textAlign: 'center'
    },
    titleCheckout:{
        textTransform:'uppercase',
        paddingBottom: '2em'
    }
})
const CheckoutPage = ({cartItems, totalPrice}) => {
    const classes = useStyles();
    return (
    <Grid container className={classes.checkoutGrid}>
        <Grid item xs={12}>
         <h2 className={classes.titleCheckout}>Checkout.</h2>
        </Grid>
        <Grid item xs={12} container>
            <Grid item xs={1} />
            <Grid item xs={10} container>
                <Grid item xs={12} sm={6}>
                 <div className="item-card">
                     <div className="item_header">
                         <h2>ORDER SUMMARY	</h2>
                     </div>
                     <div className="item-product">
                        {
                            cartItems.length ?
                            (
                                cartItems.map(cartItem => (
                                   <CartEdit key={cartItem.id} cartItem={cartItem} />
                                ))
                            ): (<h3>No item</h3>)
                        }
                     </div>
                     <div className="pay">
                         <div className="subtot">
                             <p>Subtotal	</p>
                             <p>{`${totalPrice}$`}</p>
                         </div>
                         <div className="subtot">
                             <p>Shipping</p>
                             <p>---</p>
                         </div>
                         <div className="subtot">
                             <p>Tax</p>
                             <p>0$</p>
                         </div>
                     </div>
                     <div className="totz">
                     <div className="subtot">
                             <p>Total (USD)</p>
                             <p><strong>{`${totalPrice}$`}</strong></p>
                         </div>
                     </div>
                 </div>
                </Grid>
                <Grid item sm={6}>
                    <div className="stripe">
                        <h2>PAYEMENT</h2>
                        <div className="details-payement">
                            <p>We accept : </p>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={1} />

            
        </Grid>

    </Grid>
    )
}
const mapStateToProps = state =>({
    cartItems : selectCart(state),
    totalPrice : selectTotalPrice(state)
})

export default connect(mapStateToProps)(CheckoutPage);