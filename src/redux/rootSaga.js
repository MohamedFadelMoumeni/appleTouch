import {all, call} from 'redux-saga/effects';
import {shopSagas} from './shop_data/shop_data.sagas';

function* rootSaga(){
    yield all([call(shopSagas)]);
}
export default rootSaga;
