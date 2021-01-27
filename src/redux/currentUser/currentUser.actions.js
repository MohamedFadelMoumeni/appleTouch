import CONSTANT_TYPES from '../redux.types';
export const googleSignInStart = () => ({
  type: CONSTANT_TYPES.GOOGLE_SIGN_IN_START
})
export const signInSuccess = (user) => ({
    type: CONSTANT_TYPES.SIGN_IN_SUCCESS,
    payload: user
})
export const signInFailure = err => ({
    type: CONSTANT_TYPES.SIGN_IN_FAILED,
    payload : err
})
export const signOutStart = () => ({
  type: CONSTANT_TYPES.SIGN_OUT_START
})
export const signOutSuccess = () => ({
  type: CONSTANT_TYPES.SIGN_OUT_SUCCESS
})
export const signOutFailure = () => ({
  type: CONSTANT_TYPES.SIGN_OUT_FAILED
})