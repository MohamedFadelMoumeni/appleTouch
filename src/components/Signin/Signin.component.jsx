import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {googleSignInStart} from '../../redux/currentUser/currentUser.actions';
import {connect} from 'react-redux';
const useStyles = makeStyles((theme) => ({
    modalForSignin: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin:'2em',
      
    
    },
    paper: {
      background:'#05192d',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      
    },
    btnForSignin:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        margin:'1em 0'
    }
  }));

const Signin = ({open, handleCloseSignModal, googleSignInStart}) => {
    const classes = useStyles();
   
    return (

  
    <div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modalForSignin}
        open={open}
        onClose={handleCloseSignModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
             <Typography variant="h4" style={{textAlign:'center', paddingBottom: '.5em', textTransform:'uppercase', color:'#fff', fontWeight:'bold'}}>Sign In</Typography>
             <Typography variant="subtitle1" style={{color:'#fff'}}>Log in to save your progress. We won't post anything anywhere.</Typography>
             <div className={classes.btnForSignin}>
             <Button  onClick={() => googleSignInStart()} variant="contained"  fullWidth style={{marginBottom: '.9em', background:'rgb(3, 239, 98)', color: '#fff'}}>Google</Button>
             <Button  style={{background:'rgb(3, 239, 98)', color: '#fff'}} variant="contained" color="primary" fullWidth>Facebook</Button>
             </div>
          </div>
        </Fade>
      </Modal>
    </div>

    )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart : () => dispatch(googleSignInStart())
})
export default connect(null, mapDispatchToProps)(Signin);