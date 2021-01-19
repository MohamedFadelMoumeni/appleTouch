import CONSTANT_TYPES from '../redux.types';

export const fetchCollectionsStart = () => ({
    type : CONSTANT_TYPES.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collections => ({
    type: CONSTANT_TYPES.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
})
export const fetchCollectionsFailed = err => ({
    type : CONSTANT_TYPES.FETCH_COLLECTIONS_FAILED,
    payload : err
})