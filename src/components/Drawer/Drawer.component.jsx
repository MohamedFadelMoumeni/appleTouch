import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import DirectoryItems from '../Directory-items/Directory-items.component';
import {makeStyles} from '@material-ui/styles';
import Button from '../Button/Button.component';
import {withRouter} from 'react-router-dom';

import {selectCart} from '../../redux/cartitems/cartitems.selectors';
import {connect} from 'react-redux';


const useStyles= makeStyles({
  drop: {
    width: '100%',
    display:'flex',
    flexDirection: 'column',
   alignItems:'flex-end'
   
  },
  btnCheckout: {
    background: '#000',
    color: '#fff',
    border: '0',
    width: '300px',
    padding: '1em 0',
    margin: '1em',
    fontSize: '1em',
    
  }
})

const DrawerComponent = ({ children, handleClose, openState, classname, leftSide, cart, history, cartitems}) => {
  const classes  = useStyles();
    return (
       <div >
           <Drawer
           style={{padding: `${!leftSide ? '0 2em' : '0'}`}}
            
            {...{
              anchor: `${leftSide ? 'left' : 'top'}`,
              open: openState,
              onClose: handleClose,
            }}
          > 
          { cart ?
           <>
            <div className={classes.drop}>
               <DirectoryItems />
               <Button value="checkout"className={classes.btnCheckout} handleClick={() => {history.push('/checkout'); handleClose()}} disabled={cartitems.length ? false : true}/>
               
            </div>
           
            </>
            : (
              <div className={classname}>
              {children}
            </div>
          
            )}
  
          </Drawer>

       </div>
    )
}
const mapStateToProps = state => ({
  cartitems : selectCart(state)
  
})


export default connect(mapStateToProps)(withRouter(DrawerComponent));