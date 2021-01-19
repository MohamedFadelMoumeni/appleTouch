import React from 'react';
import {withRouter} from 'react-router-dom';
import {Grid, Typography, Button} from '@material-ui/core';
import useStyles from './popular_section.styles';



const Popular = ({history}) => {
   
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
export default React.memo(withRouter(Popular));