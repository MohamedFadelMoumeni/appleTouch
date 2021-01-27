import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Typography} from '@material-ui/core';
import {selectCart} from '../../redux/cartitems/cartitems.selectors';
import {connect} from 'react-redux';
import './Directory-items.styles.css';


const useStyles = makeStyles({
   
  cartItem: {
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      width: '300px',
      margin : '1em',
      textAlign : 'center',
      
      color: '#fff'
  },
  cartItemImg: {
      width: '40%'
  },
  detailsItem: {
      textAlign :'left',
      fontWeight :'0',
      marginLeft :'.9em'
  },
  titleItem : {
      fontSize: '.9em',
     
  }
})
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
