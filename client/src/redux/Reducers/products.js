import { GET_PRODUCTS } from '../Actions/actionTypes';

const initialState = {
    prducts: 10,
    itemsCollection: []
};

export const productsReducer = (state = initialState, action) => {
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
