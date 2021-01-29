import React from 'react';
import {Grid} from '@material-ui/core';
import useStyles from './firstShopSection.styles';

const FirstShopSection = ({reversed, item:{name, imgUrl}}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} className={reversed ? classes.imgGrid : classes.imgGridSecond}>
        <img className={classes.imgSection} src={imgUrl} alt={`${name}`}/>
        </Grid>
    )
}
export default FirstShopSection;