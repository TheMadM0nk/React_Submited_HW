import React, { useCallback } from 'react';
import { List, Divider, Box } from '@mui/material';
import { Button } from './chatStyles';
import { Chat } from './chat/chat';
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteChat } from '../../store/chat_list/actions'
import { chatSelector } from '../../store/chat_list/selectors';
import { createChatFB, getChatsFB } from '../../store/chat_list';

export const ChatList = () => {
    const chatList = useSelector(chatSelector);
    const dispatch = useDispatch();

    const { chatId } = useParams();

    const addChat = () => {
        let user = prompt('Enter User name');
        let validName = !chatList.includes(user);

        if (user && validName) {
            dispatch(createChatFB(user));
            dispatch(getChatsFB());
        } else {
            alert('Not valid name!')
        }
    };

    const removeChat = useCallback((chatName) => {
        dispatch(deleteChat(chatName));
    }, [dispatch]);

    return (
        <List >
            {chatList.map((chat) => (
                <Link to={`/chats/${chat.title}`} key={chat.title} >
                    <Chat name={chat.title}
                        selected={chatId === chat.title}
                        handler={removeChat}
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