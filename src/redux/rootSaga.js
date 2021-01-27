import {all, call} from 'redux-saga/effects';
import {shopSagas} from './shop_data/shop_data.sagas';
import {userSaga} from './currentUser/currentUser.sagas';

function* rootSaga(){
    yield all([call(shopSagas), call(userSaga)]);
}
export default rootSaga;
