import {
    messangerReducer,
    sendMessage,
    deleteMessage,
    getMessagesStart,
    getMessagesSuccess,
    getMessagesError
} from '../../messanger';


describe('messages reducer', () => {
    describe('send and delete messages', () => {
        it('send message', () => {
            const MESSAGE = { author: 'user', message: 'test' };
            // const state = messangerReducer(
            //     { messages: {} },
            //     sendMessage("chatId", { author: 'user', message: 'test' })
            // );

            const state = messangerReducer(
                { messages: {} },
                sendMessage("chatId", MESSAGE)
            );

            expect(state.messages).toEqual({
                chatId: [{ author: 'user', message: 'test' }]
            });
            expect(state.messages.chatId).toBeDefined();

            expect(state.messages.chatId[0].author).toBe(MESSAGE.author);
            expect(state.messages.chatId[0].message).toBe(MESSAGE.message);
        });

        it('delete message', () => {
            const state = messangerReducer(
                {
                    messages: {
                        chatId: [{ id: 1 }]
                    }
                },
                deleteMessage("chatId", 1)
            );
            expect(state.messages.chatId.length).toBe(0);
        })
    });

    describe('get messages', () => {

        it('start', () => {
            const state = messangerReducer(
                { pending: false, error: true },
                getMessagesStart()
            );

            expect(state.pending).toBe(true);
            expect(state.error).toBe(null);
        });

        it('success', () => {
            const MESSAGE = 'message';
            const state = messangerReducer(
                { pending: true, error: null, messages: {} },
                getMessagesSuccess(MESSAGE)
            );

            expect(state.pending).toBe(false);
            expect(state.error).toBe(null);
            expect(state.messages).toBe(MESSAGE);
        });

        it('error', () => {
            const ERROR = 'error';
            const state = messangerReducer(
                { pending: true, error: null },
                getMessagesError(ERROR)
            );

            expect(state.pending).toBe(false);
            expect(state.error).toBe(ERROR);
        });
    })
});