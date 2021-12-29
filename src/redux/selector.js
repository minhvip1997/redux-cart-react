// import { createSelector } from "reselect";


export const allProductsSelector = (state)=>state.carts.products;
export const allCartsSelector = (state)=>state.carts.carts;
export const allItemsCountSelector = (state)=>state.carts.itemCount;
export const TotalCartPriceSelector = (state)=>state.carts.totalCartPrice;
export const userSelector = (state)=>state.login.userlogin;
export const allUserSelector = (state)=>state.login.users;
export const isLoginSelector = (state)=>state.login.isLoggedIn;
export const isRememberSelector = (state)=>state.login.rememberAccount;