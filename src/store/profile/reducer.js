import { SWITCHCHECKED } from './types';

const initState = {
    checked: false
};

export const profileReducer = (state = initState, action) => {

    switch (action.type) {

        case SWITCHCHECKED:
            return { ...state, checked: !state.checked }
        default:
            return state;
    }
}