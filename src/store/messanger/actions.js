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

export const getMessagesStart = () => ({
    type: GET_MESSAGES_START
});
export const getMessagesSuccess = (messages) => ({
    type: GET_MESSAGES_SUCCESS,
    payload: messages
});
export const getMessagesError = (error) => ({
    type: GET_MESSAGES_ERROR,
    payload: error
});

export const sendMessagesStart = () => ({
    type: SEND_MESSAGE_START
});
export const sendMessagesSuccess = (chatId, message) => ({
    type: SEND_MESSAGE_SUCCESS,
    payload: { chatId, message }
});
export const sendMessagesError = (error) => ({
    type: SEND_MESSAGE_ERROR,
    payload: error
});
