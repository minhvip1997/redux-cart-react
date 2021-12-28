// import { createSelector } from "reselect";


export const allProductsSelector = (state)=>state.carts.products;
export const allCartsSelector = (state)=>state.carts.carts;
export const allItemsCountSelector = (state)=>state.carts.itemCount;
export const TotalCartPriceSelector = (state)=>state.carts.totalCartPrice;