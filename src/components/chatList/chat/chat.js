import React from 'react';
import { Box, ListItemAvatar, Avatar, Button } from '@mui/material';
import { ListItem, ListItemText } from '../chatStyles';
import { useLinkClickHandler } from "react-router-dom";
import { useSelector } from 'react-redux';
import { lastMessageSelector } from '../../../store/chat/selectors';

export const Chat = ({ name, selected, handler }) => {
    const linkHandler = useLinkClickHandler('/chats');
    const lastMessage = useSelector(lastMessageSelector(name));

    return (

        <ListItem sx={{ height: '80px' }} alignItems="flex-start"
            button
            role={'buttonChat'}
            selected={selected}
            data-testid='chatTestId'
        >
            <ListItemAvatar>
                <Avatar alt={name} />
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={lastMessage.message}
            />
            <Box sx={{ marginTop: '10px' }}
                onClick={linkHandler}
            >
                <Button sx={{ padding: '2px' }}
                    variant="contained"
                    color='error'
                    name={name}
                    data-testid='deleteButton'
                    onClick={() => handler(name)}
                >
                    DEL
                </Button>
            </Box>
        </ListItem >
    );
}