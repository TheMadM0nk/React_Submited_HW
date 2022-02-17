import {
    sendMessage,
    getMessagesStart,
    getMessagesSuccess,
    getMessagesError,
    sendMessagesStart,
    sendMessagesSuccess,
    sendMessagesError
} from "./actions";

// export const sendMessageWithBot = (chatId, message) => (dispatch, getState) => {
//     dispatch(sendMessageFB(chatId, message));

//     if (message.author !== "Bot:") {
//         let timerId = null;
//         timerId = setTimeout(() => {
//             dispatch(
//                 sendMessage(chatId, {
//                     author: "Bot:",
//                     message: "Message recived! (thunk bot)",
//                 })
//             );
//         }, 500);
//         return () => clearInterval(timerId);
//     }
// };

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

        // не понимаю почему после sendMessagesSuccess не отрабатывает консоль,
        // и как следствие не работает бот... 

        console.log('sdfsdfs')
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

    } catch (e) {
        dispatch(sendMessagesError(e));
    }
};