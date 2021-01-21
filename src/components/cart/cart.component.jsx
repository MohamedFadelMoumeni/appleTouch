import React from 'react';
import {Typography} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import {addItemToCart, decreaseItemFromCart} from '../../redux/cartitems/cartitems.actions';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
const useStyles= makeStyles({
    iconArrow: {
        cursor :'pointer'
    }
})
const CartEdit = ({cartItem, addItemToCart, decreaseItemFromCart}) => {
    const classes  = useStyles();
    return(
        <div className="product" key={cartItem.id}>
                                    <img src={cartItem.imgUrl} alt={`${cartItem.name}`}/>
                                   <div className="item-details">
                                  <Typography variant="subtitle1" style={{width: '200px'}}>{cartItem.name}</Typography>
                                        <Typography variant="body2" style={{display: 'flex',alignItems:'center' }} color="textPrimary">quantity:<ArrowLeftIcon className={classes.iconArrow} onClick={() => decreaseItemFromCart(cartItem)}/> {cartItem.quantity} <ArrowRightIcon className={classes.iconArrow} onClick={() => addItemToCart(cartItem)}/></Typography>
                                  </div>
                                   <p>{`${cartItem.price}$X${cartItem.quantity}`}</p>
                                   </div>
    )
}
  const mapDispatchToProps = dispatch =>({
    addItemToCart : (item) => dispatch(addItemToCart(item)),
    decreaseItemFromCart :(item) =>dispatch(decreaseItemFromCart(item))
  })
export default connect(null, mapDispatchToProps)(CartEdit);