import {
    CREATE_CHAT_START,
    CREATE_CHAT_SUCCESS,
    CREATE_CHAT_ERROR,
    ADD_CHAT,
    DEL_CHAT,
    GET_CHATS_START,
    GET_CHATS_SUCCESS,
    GET_CHATS_ERROR
} from './types';

const initState = {
    chats: [],
    pending: false,
    error: null
};

export const chatListReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_CHAT_START:
            return { ...state, pending: true, error: null };

        case ADD_CHAT:
        case CREATE_CHAT_SUCCESS:
            return { ...state, chats: [...state.chats.title, action.payload] };

        case CREATE_CHAT_ERROR:
            return { ...state, pending: false, error: action.payload };

        case DEL_CHAT:
            return {
                ...state,
                chats: state.chats.filter((chatName) => chatName !== action.payload)
            };

        case GET_CHATS_START:
            return { ...state, pending: true, error: null };
        case GET_CHATS_SUCCESS:
            return { ...state, pending: false, chats: action.payload };
        case GET_CHATS_ERROR:
            return { ...state, pending: false, error: action.payload };

        default:
            return state;
    }
}