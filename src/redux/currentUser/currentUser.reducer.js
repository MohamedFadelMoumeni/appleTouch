import CONSTANT_TYPES from '../redux.types';

const initialState = {
    currentUser : null,
    errorMessage : ''
}


 const userReducer  = (state = initialState, action) => {
    switch(action.type){
        case CONSTANT_TYPES.SIGN_IN_SUCCESS:
            return {
             ...state,
             currentUser : action.payload,
             errorMessage :''
            }
        case CONSTANT_TYPES.SIGN_IN_FAILED:
            return {
                ...state,
                errorMessage : action.payload,
                currentUser : null
            }
        case CONSTANT_TYPES.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser : null,
                errorMessage :''
            }
        default:
            return state
    }
}

export default userReducer;