import { LOG_USER } from './actionTypes';

export const logUser = content => ({
    type: LOG_USER,
    payload: {
        content
    }
});

