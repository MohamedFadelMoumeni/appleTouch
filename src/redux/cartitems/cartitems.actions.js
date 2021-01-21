import CONSTANT_TYPES from '../redux.types';

export const addItemToCart = (item) => ({
    type: CONSTANT_TYPES.ADD_ITEMS_TO_CART,
    payload : item
})

export const increaseItemToCart = (item) => ({
    type: CONSTANT_TYPES.INCREASE_ITEM_TO_CART,
    payload: item
})
export const decreaseItemFromCart = (item) =>({
    type: CONSTANT_TYPES.DECREASE_ITEM_FROM_CART,
    payload: item
})