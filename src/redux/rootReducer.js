import {combineReducers} from 'redux';
import collectionsReducer from './shop_data/shop_data.reducer';
import headReducer from './head_data/head_data.reducer';
import cartReducer from './cartitems/cartitems.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
   key: 'root',
   storage,
   whiteList: ['cart']
}

const rootReducer = combineReducers({
   shop_data : collectionsReducer,
   head : headReducer,
   cart : cartReducer
});

export default persistReducer(persistConfig, rootReducer);