import {
    sendMessage,
    getMessagesStart,
    getMessagesSuccess,
    getMessagesError,
    sendMessagesStart,
    sendMessagesSuccess,
    sendMessagesError
} from "./actions";


export const getMessages = () => async (dispatch, _, api) => {
    const messages = {};

    try {
        dispatch(getMessagesStart());

        const snapshot = await api.getMessagesApi();

        snapshot.forEach((snap) => {
            messages[snap.key] = Object.values(snap.val());
        });

        dispatch(getMessagesSuccess(messages));
    } catch (e) {
        dispatch(getMessagesError(e));
    }
};

export const sendMessageFB = (chatId, message) => async (dispatch, _, api) => {
    try {
        dispatch(sendMessagesStart());

        const newMessage = await api.sendMessageApi(chatId, message);

        dispatch(sendMessagesSuccess(chatId, newMessage));

        if (message.author !== "Bot:") {
            setTimeout(() => {
                dispatch(
                    sendMessageFB(chatId, {
                        author: "Bot:",
                        message: "Message recived! (thunk bot)",
                    })
                );
            }, 500);
        }
        dispatch(getMessages());
    } catch (e) {
        dispatch(sendMessagesError(e));
    }
};