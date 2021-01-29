import CONSTANT_TYPES from '../redux.types';

import {takeLatest, put, all, call} from 'redux-saga/effects';
import {signInSuccess, signInFailure, signOutFailure, signOutSuccess} from './currentUser.actions';
import {cleanCartItems} from '../cartitems/cartitems.actions';
import {googleProvider, auth, createUserProfile, getCurrentUser, facebookProvider} from '../../firebase/firebase';

export function* getSnapShotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfile, userAuth);
        const snapShot = yield userRef.get();
        yield put(signInSuccess({
            id: snapShot.id,
            ...snapShot.data()
        }))
    } catch (e) {
        yield put(signInFailure(e.message))
    }
}

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield call(getSnapShotFromUserAuth, user);
        yield put(cleanCartItems());

       
    }catch(e){
    yield put(signInFailure(e.message))
    }
}
export function* signInWithFacebook(){
    try{
        const {user} = yield auth.signInWithPopup(facebookProvider);
        yield call(getSnapShotFromUserAuth, user);
        yield put(cleanCartItems());

       
    }catch(e){
    yield put(signInFailure(e.message))
    }
   
}
export function* checkUserSession() {
    try {
        const userAuth = getCurrentUser();
        if (!userAuth) return;
        yield put(getSnapShotFromUserAuth(userAuth))
    } catch (e) {
        yield put(signInFailure(e.message))
    }
}
export function* onCheckUserSession() {
    yield takeLatest(CONSTANT_TYPES.CHECK_USER_SESSION, checkUserSession)
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
export function* onFacebookSignInStart(){
    yield takeLatest(CONSTANT_TYPES.FACEBOOK_SIGN_IN_START, signInWithFacebook);
}

export function* userSaga(){
    yield all([call(onGoolgeSignInStart), call(onSignOut), call(onFacebookSignInStart), call(onCheckUserSession)])
}