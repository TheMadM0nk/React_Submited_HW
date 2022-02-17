import { db } from "./firebase";

export const getChatsApi = () => {
    return db.ref("chats").get();
};

export const createChatApi = (chatId) => {
    return db
        .ref("chats")
        .child(chatId)
        .set({ title: chatId, value: "" });
};

// приведенная ниже функция работает для удаления всех чатов - ref("chats")
// но для вложенных эелементов ругается что отказаано в доступе
// как получить доступ к вложенным элементам я не нашел

// export const deleteChatApi = (chatId) => {
//     return db.ref(chatId).remove()
// }

