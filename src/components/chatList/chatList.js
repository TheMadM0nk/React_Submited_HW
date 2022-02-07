import React, { useCallback } from 'react';
import { List, Divider, Box } from '@mui/material';
import { Button } from './chatStyles';
import { Chat } from './chat/chat';
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { createChat, deleteChat } from '../../store/chat_list/actions'
import { chatSelector } from '../../store/chat_list/selectors';
import { messangerSelector } from '../../store/messanger/selectors';

export const ChatList = () => {
    const chatList = useSelector(chatSelector);
    const dispach = useDispatch();

    const { chatId } = useParams();
    const messages = useSelector(messangerSelector(chatId));

    // = Вывод последнего сообщения.
    // = Пока что реализация костыльная, и не работает как надо, 
    // = не смог пока что сообразить как сделать

    const lastMessage = useCallback((name) => {
        if (chatId === name) {
            const msg = { [chatId]: messages[messages.length - 2] ?? [] }
            let lastMessage = msg[chatId].message;
            return lastMessage;
        }
    }, [messages, chatId]);
    // ==========================================

    const addChat = () => {
        let user = prompt('Enter User name');
        let validName = !chatList.includes(user);

        if (user && validName) {
            dispach(createChat(user))
        } else {
            alert('Not valid name!')
        }
    };

    const removeChat = useCallback((chatName) => {
        dispach(deleteChat(chatName));
    }, [dispach]);

    return (
        <List >
            {chatList.map((chat) => (
                <Link key={chat} to={`/chats/${chat}`}>
                    <Chat name={chat}
                        selected={chatId === chat}
                        handler={removeChat}
                        lastMessage={lastMessage(chat)}
                    />
                    <Divider component="li" />
                </Link>
            ))}
            <Box sx={{ margin: '10px' }} >
                <Button sx={{ width: '100%' }} onClick={addChat} >Add Chat</Button>
            </Box>
        </List>
    );
}