
import {combineReducers} from 'redux'
import { cartReducer } from '../reducer';
import storage from 'redux-persist/lib/storage';
import { loginReducer}  from './loginReducer'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';



const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['itemCount','carts','totalCartPrice'],
  stateReconciler: autoMergeLevel2 
 };

 const loginConfig = {
  key: 'login',
  storage: storage,
  whitelist: ['userlogin','isLoggedIn'],
  stateReconciler: autoMergeLevel2 
 };

const rootReducer = combineReducers({
  carts: persistReducer(persistConfig, cartReducer),
  login: persistReducer(loginConfig, loginReducer),
})
// const pReducer = persistReducer(persistConfig, rootReducer);

export default rootReducer;