import ActionTypes from "../../constant/index";
import Message from '../../constant/message'; 
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';
import {combineReducers} from 'redux'


const initState = {
    users:[
        {id: 1, userName: 'minh', password: '123123'},
        {id: 2, userName: 'nhatminh', password: '123456'},
        {id: 3, userName: 'minhtran', password: '456456'},
        {id: 4, userName: 'trannhat', password: '789789'},
    ],
    userlogin: [],
    isLoggedIn: false,
    message: '',
    rememberAccount: [],
    
}

const persistConfig = {
  key: 'login',
  storage: storage,
  whitelist: ['userLogin'],
  stateReconciler: autoMergeLevel2 // Xem thêm tại mục "Quá trình merge".
 };



const loginReducer = (state = initState,action)=>{
  
    switch (action.type) {
      
        case ActionTypes.LOGIN_SUCCESS:
          if(action.payload.remember === true){
            return{
              ...state,
              userlogin: action.payload.userLogin,
              isLoggedIn: true,
              message: action.payload.message,
              rememberAccount: action.payload.userLogin
          }
          }else{
              return{
                ...state,
                userlogin: action.payload.userLogin,
                isLoggedIn: true,
                message: action.payload.message,
                rememberAccount: []
            }
          }
          // return{
          //     ...state,
          //     userlogin: action.payload.userLogin,
          //     isLoggedIn: true,
          //     message: action.payload.message
          // }

        case ActionTypes.LOGIN_ERROR:
          return{
              ...state,
              userlogin: null,
              message: action.payload.message
          }
        case ActionTypes.LOGOUT:
          return{
              ...state,
              userlogin:  null,
              isLoggedIn: false,
          }
        default:
          return state
      }

      
}
const pReducer = persistReducer(persistConfig, loginReducer);

export {loginReducer,pReducer};