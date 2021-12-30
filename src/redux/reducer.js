import TypeAction from "../constant/index";
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';
import {combineReducers} from 'redux'


const initState = {
    products:[
        {id: 1, name: 'learn yoga', price: 100},
        {id: 2, name: 'learn redux', price: 200},
        {id: 3, name: 'learn javascript', price: 300},
        {id: 4, name: 'learn typecript', price: 400},
        {id: 5, name: 'learn english', price: 500},
        {id: 6, name: 'learn java', price: 600},
    ],
    // carts:   [],
    carts:   {},
    itemCount: 0,
    totalCartPrice: 0,
    
}



const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['itemCount','carts','totalCartPrice'],
  stateReconciler: autoMergeLevel2 // Xem thêm tại mục "Quá trình merge".
 };



const cartReducer = (state = initState,action)=>{
  
    switch (action.type) {
      
        case TypeAction.ADD_PRODUCTS:
          
        let sum = state.totalCartPrice;
        sum+=action.payload.totalprice;
        let qyt=0
        if(!state.carts.hasOwnProperty(action.payload.id)){
          state.carts[action.payload.id] = action.payload;
          
          
        }else{
            state.carts[action.payload.id].quantity = state.carts[action.payload.id].quantity+1;
            state.carts[action.payload.id].totalprice = state.carts[action.payload.id].quantity * state.carts[action.payload.id].price;
        }
            
          for (var key of Object.keys(state.carts)) {
            qyt+=state.carts[key].quantity;
          }
          return{
            ...state,
            carts:{...state.carts},
            itemCount: qyt
          }
          

        case TypeAction.INCREMENT_QUANTITY:
          
          
          if(state.carts.hasOwnProperty(action.payload.id)){
            
            state.carts[action.payload.id].quantity = state.carts[action.payload.id].quantity+1;
            state.carts[action.payload.id].totalprice = state.carts[action.payload.id].quantity * state.carts[action.payload.id].price;
          }
          return{
            ...state,
            carts:{...state.carts},
            itemCount: state.itemCount+1
          }
          
        case TypeAction.DECREMENT_QUANTITY:
          
          if(state.carts.hasOwnProperty(action.payload.id)){
            state.carts[action.payload.id].quantity = state.carts[action.payload.id].quantity-1;
            state.carts[action.payload.id].totalprice = state.carts[action.payload.id].quantity * state.carts[action.payload.id].price;
          }
          return{
            ...state,
            carts:{...state.carts},
            itemCount: state.itemCount-1
          }
        default:
          return state
      }

      
}
const pReducer = persistReducer(persistConfig, cartReducer);

export {cartReducer,pReducer};