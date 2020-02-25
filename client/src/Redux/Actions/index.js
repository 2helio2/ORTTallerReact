import { LOG_USER } from './actionTypes';
import { GET_PRODUCTS } from '../Actions/actionTypes';
import { GET_CART } from '../Actions/actionTypes';
import { ADD_TO_CART } from '../Actions/actionTypes';
import { REMOVE_FROM_CART } from '../Actions/actionTypes';

export const getProducts = content => ({
    type: GET_PRODUCTS,
    payload: {
        content
    }
});

export const getCart = content => ({
    type: GET_CART,
    payload: {
        content
    }
})

export const removeFromCart = content => ({
    type: REMOVE_FROM_CART,
    payload: {
        content
    }
})

export const addToCart = content => ({
    type: ADD_TO_CART,
    payload: {
        content
    }
})

export const logUser = content => ({
    type: LOG_USER,
    payload: {
        content
    }
});

