import { createStore } from "redux";
import rootReducer from "./reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { pReducer } from "./reducer";
const composedEnhancers = composeWithDevTools();

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['carts'],
//   stateReconciler: autoMergeLevel2 // Xem thêm tại mục "Quá trình merge".
//  };


// const store = createStore(rootReducer,
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const pReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(pReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store);

// export default {store,persistor};    