import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '../Button/Button.component';

import {addItemToCart} from '../../redux/cartitems/cartitems.actions';

import {connect} from 'react-redux';
import './Modal.styles.css';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: '80%'
    },
    rightContainer:{
        textAlign :'left'
    },
    old : {
        textDecoration: 'line-through',
        color: 'gray'
    },
    instock: {
        color: 'green',
        textTransform : 'uppercase',
        fontWeight :'bolder'
    },
    imgModal: {
        width: '90%'
    }
  }));

const ModalComponent = ({handleOpen, handleClose, state:{openModal}, item, addItemToCart}) => {
    const classes = useStyles();
    const {imgUrl, name, price} = item;
  
    return (
        <div>
       
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openModal}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openModal}>
            <Grid container  className={classes.paper} justifyContent="center" alignItems="center">
               <Grid xs={12} item sm={5} >
                <img src={imgUrl} alt="" className={classes.imgModal}/>
               </Grid>
               <Grid item xs={12} sm={7} className={classes.rightContainer}>
                    <Typography variant="h4" className={classes.instock}>IN STOCK.</Typography>
                    <h2>{name}</h2>
                    <h3><span className={classes.old}>200$</span> {`${price}$`}</h3>
                    <Button className="cart-btn" value="Add to Cart"  cartBtn handleClick={() => addItemToCart(item)}/>
               </Grid>
            </Grid>
          </Fade>
        </Modal>
      </div>

    )
}

const mapDispatchToProps = dispatch => ({
    addItemToCart : (item) => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(ModalComponent);