import ActionTypes  from "../constant/index";



export const addProduct = (data) =>{
    return {
        type: ActionTypes.ADD_PRODUCTS,
        payload: data
    }
}

export const incrementQuantity = (data) =>{
    return {
        type: ActionTypes.INCREMENT_QUANTITY,
        payload: data
    }
}

export const decrementQuantity = (data) =>{
    return {
        type: ActionTypes.DECREMENT_QUANTITY,
        payload: data
    }
}

export const login_success = (data) =>{
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: data
    }
}

export const login_error = (data) =>{
    return {
        type: ActionTypes.LOGIN_ERROR,
        payload: data
    }
}

export const logout = (data) =>{
    return {
        type: ActionTypes.LOGOUT,
        payload: data
    }
}