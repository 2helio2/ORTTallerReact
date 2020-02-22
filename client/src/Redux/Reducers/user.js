import { LOG_USER } from '../Actions/actionTypes';

const initialState = {
    userName: '',
    password: '',
    loggedin: false
}

export const user = (state = initialState, action) => {
    switch(action.type) {
        case LOG_USER:
            const user = action.payload;
            const loggedin = user.userName.length > 0;

            return {
                ...state,
                userName: user.userName,
                password: user.password,
                loggedin: loggedin
            }
        default:
            return state
    }
}

