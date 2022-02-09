import { TOGGLE_CHECKBOX } from './types';

const initState = {
    checked: false
};

export const profileReducer = (state = initState, action) => {

    switch (action.type) {

        case TOGGLE_CHECKBOX:
            return { ...state, checked: !state.checked }
        default:
            return state;
    }
}