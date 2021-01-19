import CONSTANT_TYPES from '../redux.types';

export const addItemToCart = (item) => ({
    type: CONSTANT_TYPES.ADD_ITEMS_TO_CART,
    payload : item
})