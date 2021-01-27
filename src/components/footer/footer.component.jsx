import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles({
    footerGrid:{
        background: '#05192d',
        color: '#fff',
        textAlign: 'center',
        padding: '1em 0'
    },
    touch: {
        display: 'flex',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center'
    },
    btnTouch: {
        color: '#fff',
        background: 'rgba(0, 0, 0, .2)',
        margin:'1em 1em'
    }
})

const Footer = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.footerGrid} container>
         <Grid item xs={12}>
         <Typography variant="h4">Get In Touch.</Typography>
         </Grid>
         <Grid item sm={1} />
         <Grid item sm={10} xs={12} className={classes.touch}>
         <Button variant="outlined" className={classes.btnTouch} href="https://www.facebook.com/profile.php?id=100019011732806" target="_blank">
             <FacebookIcon fontSize="large"/>
         </Button>
         <Button variant="outlined" className={classes.btnTouch} href="https://www.linkedin.com/in/%E2%9C%94-mohamed-fadel-moumeni-57894316a/" target="_blank">
             <LinkedInIcon fontSize="large"/>
         </Button>
         <Button variant="outlined" className={classes.btnTouch} href="tel:+212617672197" target="_blank">
             <PhoneIcon fontSize="large"/>
         </Button>

         </Grid>
         <Grid item sm={1} />
         <Grid item xs={12}>
             <Typography style={{textAlign:"center"}}>Designed by Mohamed Fadel Moumeni 	&copy; 2021.</Typography>
         </Grid>
        </Grid>

    )
}

export default Footer;