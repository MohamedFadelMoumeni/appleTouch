import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import useStyles from './shop_section.styles';
import SecondShopSection from '../secondShopSection/secondShopSection.component';
import FirstShopSection from '../firstShopSection/firstShopSection.component';


const ShopSection = ({item}) => {
    const {reversed} = item;
    const classes = useStyles();

  
    return (
        <Grid className={classes.sectionContainer}  container alignItems="center" justify="center">
            <Grid item xs={12} className={classes.itemContainer} container>
                 <Grid item sm={1} xs={1}/>
                 <Grid item sm={10} xs={12} container alignItems="center">
                    {
                         reversed ? 
                         (
                             <>
                             <FirstShopSection item={item} reversed={true}/>
                             <SecondShopSection item={item}/>
                             </>
                         ) : 
                         (
                             <>
                             <SecondShopSection item={item}/>
                             <FirstShopSection item={item} reversed={false}/>
                             
                            
                             </>
                         )
                    }
                     
                    

                 </Grid>
                 <Grid item sm={1} xs={1}/>

            </Grid>

        </Grid>

    )
}

export default ShopSection;