import {
    SEND_MESSAGE,
    DELETE_MESSAGE,
    GET_MESSAGES_START,
    GET_MESSAGES_SUCCESS,
    GET_MESSAGES_ERROR,
    SEND_MESSAGE_START,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_ERROR
} from "./types";

const initState = {
    pending: false,
    error: null,
    messages: {}
};

export const messangerReducer = (state = initState, action) => {

    switch (action.type) {
        case SEND_MESSAGE_START:
            return { ...state, pending: true, error: null };

        case SEND_MESSAGE:
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state, messages: {
                    ...state.message,
                    [action.payload.chatId]: [...(state.message[action.payload.chatId] ?? []),
                    {
                        ...action.payload.value
                    }]
                }
            };

        case SEND_MESSAGE_ERROR:
            return { ...state, pending: false, error: action.payload };

        case DELETE_MESSAGE:
            return {
                ...state, messages: {
                    ...state.messages,
                    [action.payload.chatId]: state.messages[action.payload.chatId].filter(
                        (message) => message.id !== action.payload.messageId
                    )

                }
            };

        case GET_MESSAGES_START:
            return { ...state, pending: true, error: null };
        case GET_MESSAGES_SUCCESS:
            return { ...state, pending: false, messages: action.payload };
        case GET_MESSAGES_ERROR:
            return { ...state, pending: false, error: action.payload };
        default:
            return state;
    }
}