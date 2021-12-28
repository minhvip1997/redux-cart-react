
import {combineReducers} from 'redux'
import { cartReducer } from '../reducer';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';



const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['itemCount','carts','totalCartPrice'],
  stateReconciler: autoMergeLevel2 // Xem thêm tại mục "Quá trình merge".
 };

const rootReducer = combineReducers({
  carts: persistReducer(persistConfig, cartReducer),
  // todoList: todoListReducer
})
// const pReducer = persistReducer(persistConfig, rootReducer);

export default rootReducer;