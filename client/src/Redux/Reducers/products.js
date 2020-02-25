import { GET_PRODUCTS } from '../Actions/actionTypes';

const initialState = {
    itemsCollection: []
};

export const products = (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS: {
            const products = action.payload;

            return {
                ...state,
                itemsCollection: products
            }
        }
        default: 
            return state;
    }
}
