import { sendMessage } from "./actions";

export const sendMessageWithBot = (chatId, message) => (dispatch, getState) => {
    dispatch(sendMessage(chatId, message));

    if (message.author !== "Bot:") {
        let timerId = null;
        timerId = setTimeout(() => {
            dispatch(
                sendMessage(chatId, {
                    author: "Bot:",
                    message: "Message recived! (thunk bot)",
                })
            );
        }, 500);

        return () => clearInterval(timerId);
    }
};