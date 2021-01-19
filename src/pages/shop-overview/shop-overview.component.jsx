import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {selectShopCategories} from '../../redux/shop_data/shop_data.selectors';
import {connect} from 'react-redux';
import CardComponent from '../../components/card-item/card-item.component';
import Spinner from '../../components/Spinner/Spinner.component';
import useStyles from './shop-overview.styles';
const ShopOverview = ({match: {params: {collectionId}}, collection}) => {
    const classes = useStyles();
    
    return (

      collection ? 
      (
        <Grid container>
        <Grid item xs={12} className={classes.headShop} container style={{backgroundImage: `url(${collection.bgImg})`}}>
         <Grid item xs={12} className={classes.headShopItem}>
             <Typography variant="h3" className={classes.titleShop}>{collection.name}.</Typography>
         </Grid>
        </Grid>
       <Grid item xs={12} container className={classes.directory}>
           <Grid item xs={12} className={classes.items}  > 
           {
             
             collection.items.map(item => (
               <CardComponent key={item.id} item={item}/> 
           )) 
          }
               
           </Grid>
       </Grid>
    </Grid>
      ): <Spinner />
    )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCategories(ownProps.match.params.collectionId)(state)
})
export default React.memo(connect(mapStateToProps)(ShopOverview));