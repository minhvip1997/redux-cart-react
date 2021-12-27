import TypeAction from "../constant/index";

const initState = {
    products:[
        {id: 1, name: 'learn yoga', price: 100},
        {id: 2, name: 'learn redux', price: 200},
        {id: 3, name: 'learn javascript', price: 300},
        {id: 4, name: 'learn typecript', price: 400},
        {id: 5, name: 'learn english', price: 500},
        {id: 6, name: 'learn java', price: 600},
    ],
    carts:[],
    itemCount: 0,
    totalCartPrice: 0
}

const rootReducer = (state = initState,action)=>{
    switch (action.type) {
        case TypeAction.ADD_PRODUCTS:
          let sum = state.totalCartPrice;
          sum+=action.payload.totalprice
          return {
            ...state,
            carts: [...state.carts,action.payload],
            itemCount: state.itemCount+1,
            totalCartPrice: sum
          }
          
        case TypeAction.INCREMENT_QUANTITY:
          let item = state.carts.find(item => item.id === action.payload.id);
          console.log(item)
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


export default rootReducer;