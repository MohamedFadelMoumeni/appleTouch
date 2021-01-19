import {createSelector} from 'reselect';

const selectCartItems = state => state.cart;

export const selectCart = createSelector(
    [selectCartItems],
    (cart) => cart.cartItems
)