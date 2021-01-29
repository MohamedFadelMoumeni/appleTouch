import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import './checkout-page.styles.css';
import {connect} from 'react-redux';
import {selectCart, selectTotalPrice} from '../../redux/cartitems/cartitems.selectors';
import StripeElement from '../../components/stripe-element/stripe-element.component';
import Order from '../../components/Order/Order.component';

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
                <Order cartItems={cartItems} totalPrice={totalPrice}/>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <StripeElement />
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