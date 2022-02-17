import { SIGNIN_STATUS_TRUE, SIGNIN_STATUS_FALSE } from './types';

const initState = {
    status: false
};

export const signinReducer = (state = initState, action) => {

    switch (action.type) {
        case SIGNIN_STATUS_TRUE:
            return { ...state, status: true };
        case SIGNIN_STATUS_FALSE:
            return { ...state, status: false };
        default:
            return state;
    }
}