import { GET_PRODUCTS } from '../Actions/actionTypes';
import { GET_CART } from '../Actions/actionTypes';
import { ADD_TO_CART } from '../Actions/actionTypes';

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

export const addToCart = content => ({
    type: ADD_TO_CART,
    payload: {
        content
    }
})