import CONSTANT_TYPES from '../redux.types';
import addItemToCart from './cartitems.utils';
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
        case CONSTANT_TYPES.REMOVE_ITEMS_FROM_CART:
            return {
                ...state,
                cartItems : state.cartItems.filter(item => item.name != action.payload.name)
            }
        default:
            return state
            
    }
}

export default cartReducer;