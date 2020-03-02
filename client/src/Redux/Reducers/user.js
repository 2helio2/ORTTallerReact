import ACTIONS from '../Actions/actionTypes';

const initialState = {
    userName: '',
    password: '',
    loggedin: false
}

export const user = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.LOG_USER:
            const user = action.payload.content;
            const loggedin = user.userName.length > 0;

            return {
                userName: user.userName,
                password: user.password,
                loggedin: loggedin
            }
        case ACTIONS.LOGOUT_USER:
            return {
                userName: '',
                password: '',
                loggedin: false
            }

        default:
            return state
    }
}

