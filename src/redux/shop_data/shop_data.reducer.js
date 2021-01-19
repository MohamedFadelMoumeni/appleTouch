import CONSTANT_TYPES from '../redux.types';

const INITIAL_STATE = {
    collections : null,
    errorMessage : '',
    isFetching : false
}

const collectionsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CONSTANT_TYPES.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case CONSTANT_TYPES.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case CONSTANT_TYPES.FETCH_COLLECTIONS_FAILED:
            return {
                ...state,
                collections : null,
                isFetching: false,
                errorMessage : action.payload
            }
        default:
            return state;
    }
}

export default collectionsReducer;