import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ShopOverview from '../shop-overview/shop-overview.component';
import MainShop from '../main-shop/main-shop.component';
const ShopPage = ({match: {path}}) => {
  
    return (
        <>
        <Switch>
        
        <Route exact path={`${path}/:collectionId`} component={ShopOverview} />
        <Route exact path={`${path}`} component={MainShop} />
        </Switch>
        </>
    
    )
}

export default ShopPage;