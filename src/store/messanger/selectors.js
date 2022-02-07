export const messangerSelector = (chatId) => (state) => {
    return state.messanger.messages[chatId] || [];
}