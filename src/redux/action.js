import TypeAction from "../constant/index";



export const addProduct = (data) =>{
    return {
        type: TypeAction.ADD_PRODUCTS,
        payload: data
    }
}

export const incrementQuantity = (data) =>{
    return {
        type: TypeAction.INCREMENT_QUANTITY,
        payload: data
    }
}

export const decrementQuantity = (data) =>{
    return {
        type: TypeAction.DECREMENT_QUANTITY,
        payload: data
    }
}