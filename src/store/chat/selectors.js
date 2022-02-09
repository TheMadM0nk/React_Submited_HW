export const lastMessageSelector = (chatId) => (state) => {
    const messages = state.messanger.messages[chatId];

    return messages?.length ? messages[messages.length - 1] : [];
};