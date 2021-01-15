import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import Directory from '../../components/Directory/Directory.component';
import Dropdown from '../../components/dropdown/dropdown.component';

const useStyles = makeStyles({
    headShop: {
        height: '50vh',
        backgroundImage:'url("https://www.apple.com/v/airpods-max/b/images/overview/audio_quality_spatial_figure__clxltt2m0z2a_large.jpg")',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        color: '#fff',
    },
    headShopItem :{
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    titleShop: {
        fontWeight:'bolder'
    },
    DirectoryGrid: {
        background: '#fff',
        padding: '3em 0'
    }
})
const ShopOverview = ({match: {params: {collectionId}}}) => {
    const classes = useStyles();
    return (

        <Grid container>
            <Grid item xs={12} className={classes.headShop} container>
             <Grid item xs={12} className={classes.headShopItem}>
                 <Typography variant="h3" className={classes.titleShop}>Airpods Max.</Typography>
             </Grid>
            </Grid>
            <Grid className={classes.DirectoryGrid} item xs={12} container >
                <Grid item sm={1} />
                <Grid item xs={10} container>
                   <Grid item xs={12} container  alignItems="center">
                   <Grid item  style={{flexGrow : '1'}}>
                           <Typography variant="subtitle1">8 items</Typography>
                       </Grid>
                       <Grid item >
                           <Dropdown />
                       </Grid>
                   </Grid>
                  
                </Grid>
                <Grid item sm={1} />
            </Grid>
        </Grid>
       
    )
}

export default ShopOverview;