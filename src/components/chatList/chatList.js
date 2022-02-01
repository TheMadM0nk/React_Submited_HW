import React, { useState } from 'react';
import { List, Divider, Box } from '@mui/material';
import { Button } from './chatStyles';
import { Chat } from './chat/chat';
import { Link, useParams } from "react-router-dom";

export const ChatList = () => {
    const [chatList, setChatList] = useState(['Gogi', 'Marcel', 'Gumbo']);
    const { chatId } = useParams();

    const addChat = () => {
        let user = prompt('Enter User name');
        if (user !== '') {
            setChatList([...chatList, user])
        } else {
            alert('Enter User name!')
        }
    };

    const delChat = (e) => {
        let x = e.target.name;
        setChatList(chatList.filter((i) => i !== x))
    };

    return (
        <List >
            {chatList.map((chat) => (
                <Link key={chat} to={`/chats/${chat}`}>
                    <Chat name={chat} selected={chatId === chat} handler={delChat} />
                    <Divider component="li" />
                </Link>
            ))}
            <Box sx={{ margin: '10px' }} >
                <Button sx={{ width: '100%' }} onClick={addChat} >Add Chat</Button>
            </Box>
        </List>
    );
}