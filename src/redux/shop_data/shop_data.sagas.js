import {call, takeLatest, put, all} from 'redux-saga/effects';
import CONSTANT_TYPES from '../redux.types';
import {firestore} from '../../firebase/firebase';
import {
    fetchCollectionsFailed,
    fetchCollectionsSuccess
} from './shop_data.actions';

function* fetchCollectionsStartAsync(){
    try{
        const collectionRef = yield firestore.collection('collections');
    const snapShot = yield collectionRef.get();
    const data = yield snapShot.docs.map(doc => doc.data());
    yield put(fetchCollectionsSuccess(data));
    }catch(e){
        yield put(fetchCollectionsFailed(e.message));
    }

    
}

function* onFetchCollectionsStart(){
    yield takeLatest(CONSTANT_TYPES.FETCH_COLLECTIONS_START, fetchCollectionsStartAsync);

}
export function* shopSagas() {
    yield all([call(onFetchCollectionsStart)])
}