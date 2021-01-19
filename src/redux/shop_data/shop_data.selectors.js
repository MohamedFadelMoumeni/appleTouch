import { Card } from '@material-ui/core';
import {createSelector} from 'reselect';

const selectShop = state => state.shop_data;

const OBJ_SHOP = {
    'earbus' : 'earbus',
    'weired-earbus': 'weired-earbus',
'headphones': 'headphones'
}

export  const selectShopData = createSelector(
    [selectShop],
    (shop_data) => shop_data.collections
)
export  const selectIsFetching = createSelector(
    [selectShopData],
    (collections) => !!collections
)
export const selectShopCategories = (urlParams) => createSelector(
    [selectShopData],
    (collections) => collections ? collections.find(collection => collection.pseudo === OBJ_SHOP[urlParams]) : null
)

