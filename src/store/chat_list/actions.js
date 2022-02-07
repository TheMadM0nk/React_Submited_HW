import { ADD_CHAT, DEL_CHAT } from './types';

export const createChat = (chatName) => ({
    type: ADD_CHAT,
    payload: chatName
});

export const deleteChat = (chatName) => ({
    type: DEL_CHAT,
    payload: chatName
});