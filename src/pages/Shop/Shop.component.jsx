import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Mainshop from '../main-shop/main-shop.component';
import ShopOverview from '../shop-overview/shop-overview.component';
const ShopPage = ({match: {path}}) => {
  
    return (
        <>
        <Switch>
        <Route exact  path={path} component={Mainshop} />
        <Route exact path={`${path}/:collectionId`} component={ShopOverview} />
        </Switch>
        </>
    
    )
}

export default ShopPage;