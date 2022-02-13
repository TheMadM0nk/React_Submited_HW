import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";

export const sendMessage = (chatId, value) => ({

    type: SEND_MESSAGE,
    payload: {
        chatId,
        value
    }
});

export const deleteMessage = (chatId, messageId) => ({

    type: DELETE_MESSAGE,
    payload: {
        chatId,
        messageId
    }
});
