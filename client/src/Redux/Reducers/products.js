import ACTIONS from '../Actions/actionTypes';

const initialState = {
    itemsCollection: []
};

export const products = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.GET_PRODUCTS: {
            const products = action.payload.content;

            return {
                ...state,
                itemsCollection: products
            }
        }
        default: 
            return state;
    }
}
