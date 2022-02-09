import { SEND_MESSAGE, sendMessage } from "../messanger";

export const botMessage = (store) => (next) => (action) => {

    if (
        action.type === SEND_MESSAGE &&
        action.payload.value.author !== "Bot:"
    ) {
        setTimeout(() => {
            store.dispatch(
                sendMessage(action.payload.chatId, {
                    author: "Bot:",
                    message: "Message recived!",
                })
            );
        }, 500);
    }

    return next(action);
};