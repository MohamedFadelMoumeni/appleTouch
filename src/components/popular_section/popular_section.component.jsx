import React from 'react';
import {withRouter} from 'react-router-dom';
import {Grid, Typography, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    popularGrid:{
        color: "#fff",
        
    },
    styleOne : {
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage:'url("https://storage.covet.pics/postassets/6999880/standard_resolution/443300bf9836cfa2693a6cad9edabe12")',
        backgroundPosition: 'center',
        backgroundSize :'cover',
        height: '100vh',
        cursor: 'pointer',
        transform: "all 2s",
        '&:hover':{
            background:'linear-gradient(0deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url("https://storage.covet.pics/postassets/6999880/standard_resolution/443300bf9836cfa2693a6cad9edabe12");',
            backgroundPosition: 'center',
            backgroundSize :'cover',
        }
    },
    styleTwo :{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage:'url("https://storage.covet.pics/postassets/6906141/standard_resolution/a17b4c9e25509a56a5de6a3246050679")',
        backgroundPosition: 'center',
        backgroundSize :'cover',
        cursor: 'pointer',
        height: '50vh',
        transition: "all .5s",
        '&:hover':{
            background:'linear-gradient(0deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url("https://storage.covet.pics/postassets/6906141/standard_resolution/a17b4c9e25509a56a5de6a3246050679");',
            backgroundPosition: 'center',
            backgroundSize :'cover',
        }
     

    },
    styleThree :{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage:'url("https://storage.covet.pics/postassets/6950740/standard_resolution/6e2064b41a878d59d30ed942204dae99")',
        backgroundPosition: 'center',
        backgroundSize :'cover',
        cursor: 'pointer',
        height: '50vh',
        transition: "all .5s",
        '&:hover':{
            background:'linear-gradient(0deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url("https://storage.covet.pics/postassets/6950740/standard_resolution/6e2064b41a878d59d30ed942204dae99");',
            backgroundPosition: 'center',
            backgroundSize :'cover',
           
            
            
        }
       

    },
    btnLook :{
        color: '#fff',
        textTransform: 'capitalize',
       
        
    }
    
})

const Popular = ({history}) => {
   
    {

    }
    const classes = useStyles();
    return (
        <Grid  className={classes.popularGrid} container>
            <Grid sm={6} xs={12} className={classes.styleOne}>
                <Button variant="outlined" className={classes.btnLook} onClick={() => history.push('/shop/airpods')}>
                    <Typography variant="subtitle1">Buy This Look.</Typography>
                </Button>
            </Grid>
            <Grid item sm={6} xs={12} container direction="row">
            <Grid item sm={12} xs={12} className={classes.styleTwo}>
            <Button variant="outlined" className={classes.btnLook} onClick={() => history.push('/shop/airpods-max')}>
                    <Typography variant="subtitle1">Buy This Look.</Typography>
                </Button>
           </Grid>
           <Grid item sm={12} xs={12} className={classes.styleThree}>
           <Button variant="outlined" className={classes.btnLook} onClick={() => history.push('/shop/airpods-pro')}>
                    <Typography variant="subtitle1">Buy This Look.</Typography>
                </Button>
           </Grid>
            </Grid>
           
            
        </Grid>
    )
}
export default withRouter(Popular);