import { ADD_TO_CART } from '../Actions/actionTypes';
import { GET_CART } from '../Actions/actionTypes';

const initialState = {
    cart: []
};

export const cart = (state = initialState, action) => {
    switch(action.type) {
        case GET_CART: {
            return {
                ...state,
                cart: state.cart
            }
        }
        case ADD_TO_CART: {
            const cart = action.payload;
            return {
                ...state,
                cart: cart
            }
        }
        default: 
            return state;
    }
}
