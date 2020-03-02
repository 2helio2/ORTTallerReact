import ACTIONS from '../Actions/actionTypes';

const initialState = {
    cart: []
};

export const cart = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.GET_CART: {
            return {
                ...state,
                cart: state.cart
            }
        }
        case ACTIONS.ADD_TO_CART: {
            const cart = action.payload.content;
            return {
                ...state,
                cart: cart
            }
        }
        case ACTIONS.REMOVE_FROM_CART: {
            const cart = action.payload.content;
            return {
                ...state,
                cart: cart
            }
        }

        case ACTIONS.CLEAR_CART: {
            return {
                cart: []
            }
        }

        default: 
            return state;
    }
}
