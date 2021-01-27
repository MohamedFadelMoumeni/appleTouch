
import CONSTANT_TYPES from '../redux.types';
import {addItemToCart, decreaseItemFromCart} from './cartitems.utils';
const INITIAL_STATE = {
    cartItems : []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CONSTANT_TYPES.ADD_ITEMS_TO_CART:
            return {
                ...state,
                cartItems : addItemToCart(state.cartItems, action.payload)
            }
        case CONSTANT_TYPES.DECREASE_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: decreaseItemFromCart(state.cartItems, action.payload)
            }
        case CONSTANT_TYPES.CLEAN_CART_ITEMS:
            return {
                ...state,
                cartItems : []
            }
        
        
        default:
            return state
            
    }
}

export default cartReducer;