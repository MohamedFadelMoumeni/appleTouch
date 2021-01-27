import React from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {Button} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
    },
    dropdown: {
      position: 'absolute',
      top: 20,
      right: 0,
      zIndex: 1,
      border: '1px solid',
      width: '240px',
      color: '#000',
      background:'whitesmoke',
      
     
    },
    dropdown__header:{
        width: '100%',
        textAlign:'center',
        background:'#fff',
       padding:'1em 0',
       boxShadow: '0 1px 3px 0 rgba(0,0,0,.2)'
    },
       dropdown__details :{
        padding: '1em',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
       },
       btn__details: {
        background:'rgb(3, 239, 98)', 
        color:'#fff',
        margin: '.5em 0'
       }

       
    
  }));
const ClickAwayListenerComponent = ({openListener, currentUser, signOutStart}) => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <ClickAwayListener
        
      >
        <div className={classes.root}>
         
          {openListener ? (
            <div className={classes.dropdown}>
              <div className={classes.dropdown__header}>
              <p>Welcome, <strong>{currentUser.displayName}</strong></p>
              </div>
              <div className={classes.dropdown__details}>
            <Button onClick={() => history.push('/shop')} fullWidth className={classes.btn__details}>Buy something </Button>
            <Button onClick={() => signOutStart()} startIcon={<ExitToAppIcon />} fullWidth className={classes.btn__details}>Log Out </Button>

            </div>
            </div>
          ) : null}
        </div>
      </ClickAwayListener>
    )
}
export default ClickAwayListenerComponent;