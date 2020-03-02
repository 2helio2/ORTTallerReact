import ACTIONS from './actionTypes';

export const saveProducts = content => ({
    type: ACTIONS.GET_PRODUCTS,
    payload: {
        content
    }
});

export const getCart = content => ({
    type: ACTIONS.GET_CART,
    payload: {
        content
    }
})

export const removeFromCart = content => ({
    type: ACTIONS.REMOVE_FROM_CART,
    payload: {
        content
    }
})

export const addCartToStore = content => ({
    type: ACTIONS.ADD_TO_CART,
    payload: {
        content
    }
})

export const clearCart = content => ({
    type: ACTIONS.CLEAR_CART,
    payload: {
        content
    }
})

export const logUser = content => ({
    type: ACTIONS.LOG_USER,
    payload: {
        content
    }
});

export const logOutUser = () => ({
    type: ACTIONS.LOGOUT_USER,
    payload: {}
});

