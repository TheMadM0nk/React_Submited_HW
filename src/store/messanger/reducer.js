import { nanoid } from 'nanoid';
import { SEND_MESSAGE, DELETE_MESSAGE } from './types';

const initState = {
    messages: {
        Gogi: [
            { author: 'Gogi', message: 'Hello there!', date: new Date(), id: nanoid() }
        ]
    }
};

export const messangerReducer = (state = initState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            return {
                ...state, messages: {
                    ...state.messages,
                    [action.payload.chatId]: [...(state.messages[action.payload.chatId] ?? []),
                    {
                        ...action.payload.value,
                        date: new Date(),
                        id: nanoid()
                    }]
                }
            }
        case DELETE_MESSAGE:
            return {
                ...state, messages: {
                    ...state.messages,
                    [action.payload.chatId]: state.messages[action.payload.chatId].filter(
                        (message) => message.id !== action.payload.messageId
                    )

                }
            }

        default:
            return state;
    }
}