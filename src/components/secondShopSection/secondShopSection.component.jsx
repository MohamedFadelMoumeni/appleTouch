import React from 'react';
import {useHistory} from 'react-router-dom';
import {Grid, Typography, Button} from '@material-ui/core';
import useStyles from './secondShopSection.styles';

const SecondShopSection = ({ item:{name, description, link}}) => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Grid item xs={12} sm={6}>
        <Typography variant="h2" className={classes.nameShopSection}>{name}</Typography>
        <Typography variant="subtitle1" className={classes.descShopSection}>{description}</Typography>
        <Button variant="outlined" className={classes.btnShopSection} onClick={() => history.push(`${link}`)}>Buy Now</Button>
        </Grid>

    )
}

export default SecondShopSection;