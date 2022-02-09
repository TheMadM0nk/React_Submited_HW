import { ADD_CHAT, DEL_CHAT } from './types';

const initState = {
    chats: ['Gogi', 'Marcel', 'Gumbo']
};

export const chatListReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_CHAT:
            return { ...state, chats: [...state.chats, action.payload] };

        case DEL_CHAT:
            return {
                ...state,
                chats: state.chats.filter((chatName) => chatName !== action.payload)
            };

        default:
            return state;
    }
}