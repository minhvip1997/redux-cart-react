import TypeAction from "../constant/index";
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';

const initState = {
    products:[
        {id: 1, name: 'learn yoga', price: 100},
        {id: 2, name: 'learn redux', price: 200},
        {id: 3, name: 'learn javascript', price: 300},
        {id: 4, name: 'learn typecript', price: 400},
        {id: 5, name: 'learn english', price: 500},
        {id: 6, name: 'learn java', price: 600},
    ],
    carts:   [],
    itemCount: 0,
    totalCartPrice: 0,
    
}

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['itemCount','carts','totalCartPrice'],
  stateReconciler: autoMergeLevel2 // Xem thêm tại mục "Quá trình merge".
 };



const rootReducer = (state = initState,action)=>{
  
    switch (action.type) {
      
        case TypeAction.ADD_PRODUCTS:
          
          let sum = state.totalCartPrice;
          sum+=action.payload.totalprice;
          
          if(state.itemCount==0){
            let cart = {
                id:action.payload.id,
                quantity:1,
                name:action.payload.name,
                price:action.payload.price,
                totalprice: action.payload.price,

            }
            state.carts.push(cart);
        }
        else{
            let check = false;

             state.carts.map((item,key)=>{
                if(item.id==action.payload.id){
                  state.carts[key].totalprice = state.carts[key].totalprice + item.price
                  state.carts[key].quantity++;
                  check=true;
   
                }
            });
            console.log(state.carts)
            
            if(!check){
                let _cart = {
                    id:action.payload.id,
                    quantity:1,
                    name:action.payload.name,
                    price:action.payload.price,
                    totalprice: action.payload.price
                }
                state.carts.push(_cart);
            }
            
        }
        return{
          ...state,
          carts : state.carts,
          itemCount: state.itemCount+1,
          totalCartPrice: sum
        }

        case TypeAction.INCREMENT_QUANTITY:
          let item = state.carts.find(item => item.id === action.payload.id);
          if (item) {
            return {
              ...state,
              carts: state.carts.map(item => item.id === action.payload.id
                ? {
                  ...item,
                  quantity: action.payload.quantity,
                  totalprice: action.payload.quantity * item.price
                }
                : item
              ),
              totalCartPrice: state.totalCartPrice + item.price,
            };
            
          }
        case TypeAction.DECREMENT_QUANTITY:
          let item2 = state.carts.find(item => item.id === action.payload.id);
          
          console.log(item2)
          let less = action.payload.quantity <1 ? 1 :action.payload.quantity ;
          if (item2) {
            return {
              ...state,
              carts: state.carts.map(item => item.id === action.payload.id
                ? {
                  ...item,
                  quantity: less,
                  totalprice: less * item2.price
                }
                : item
              ),
              totalCartPrice: (item2.quantity <= 1 ? state.totalCartPrice : state.totalCartPrice - item2.price),
            };
          }
        default:
          return state
      }

      
}
const pReducer = persistReducer(persistConfig, rootReducer);

export {rootReducer,pReducer};