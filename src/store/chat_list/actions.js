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

export const createChat = (chatName) => ({
    type: ADD_CHAT,
    payload: chatName
});
export const deleteChat = (chatName) => ({
    type: DEL_CHAT,
    payload: chatName
});


export const createChatStart = () => ({
    type: CREATE_CHAT_START
});
export const createChatSuccess = (chatId) => ({
    type: CREATE_CHAT_SUCCESS,
    payload: chatId
});
export const createChatError = (error) => ({
    type: CREATE_CHAT_ERROR,
    payload: error
});


export const getChatsStart = () => ({
    type: GET_CHATS_START
});
export const getChatsSuccess = (chats) => ({
    type: GET_CHATS_SUCCESS,
    payload: chats
});
export const getChatsError = (error) => ({
    type: GET_CHATS_ERROR,
    payload: error
});