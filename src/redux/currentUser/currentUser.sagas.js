import CONSTANT_TYPES from '../redux.types';

import {takeLatest, put, all, call} from 'redux-saga/effects';
import {signInSuccess, signInFailure, signOutFailure, signOutSuccess} from './currentUser.actions';
import {cleanCartItems} from '../cartitems/cartitems.actions';
import {googleProvider, auth, createUserProfile, getCurrentUser} from '../../firebase/firebase';

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfile, user);
        const snapShot  = yield userRef.get();
        yield put(signInSuccess({
            id: snapShot.id,
            ...snapShot.data()
        }));
        yield put(cleanCartItems());

       
    }catch(e){
    yield put(signInFailure(e.message))
    }
}
export function* signOut(){
   try{
       yield auth.signOut();
       yield put(signOutSuccess());
       yield put(cleanCartItems());
   }catch(e){
       yield put(signOutFailure(e));
   }
}
export function* onGoolgeSignInStart(){
    yield takeLatest(CONSTANT_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* onSignOut(){
    yield takeLatest(CONSTANT_TYPES.SIGN_OUT_START, signOut)
}

export function* userSaga(){
    yield all([call(onGoolgeSignInStart), call(onSignOut)])
}