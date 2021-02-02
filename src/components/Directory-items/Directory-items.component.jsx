import React from 'react';
import {Typography} from '@material-ui/core';
import {selectCart} from '../../redux/cartitems/cartitems.selectors';
import {connect} from 'react-redux';
import useStyles from './Directory-items.styles';
import './Directory-items.styles.css';

const DirectoryItems = ({cartitems}) => {
    const classes = useStyles();
    return (
        <div className="list">
        {
            cartitems.length ?
            (
                cartitems.map(({imgUrl, name, price, quantity}) => (
                
                    <div className={classes.cartItem}>
                     <img src={imgUrl} alt={`${name}`} className={classes.cartItemImg}/>
                     <div className={classes.detailsItem}>
                         <Typography className={classes.titleItem}>{name}</Typography>
                         <Typography variant="body2" style={{padding:'.5em 0'}}>{`price: ${price}$`}</Typography>
                         <Typography variant="body2">{`quantity: ${quantity}`}</Typography>
                     </div>
                 </div>
              
           ))
            ) : (<h2 style={{textAlign:'center', color: '#fff'}}>No Items.</h2>)
        }
      </div>
    )
}
const mapStateToProps = state => ({
    cartitems : selectCart(state)
    
})

export default connect(mapStateToProps)(DirectoryItems);
