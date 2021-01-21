import {createSelector} from 'reselect';

const selectCartItems = state => state.cart;

export const selectCart = createSelector(
    [selectCartItems],
    (cart) => cart.cartItems
)
export const selectTotalItems = createSelector(
    [selectCart],
    (cartItems) => cartItems.reduce((acc, item) => acc+item.quantity, 0)
)
export const selectTotalPrice = createSelector(
    [selectCart],
    (cartItems) => cartItems.reduce((acc, item) => acc+ (item.price*item.quantity), 0)
)