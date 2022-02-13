import React from 'react';
import { Box, ListItemAvatar, Avatar, Typography, Button } from '@mui/material';
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
            selected={selected}
        >
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" />
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                        >
                            {lastMessage.message}
                        </Typography>
                    </React.Fragment>
                }
            />
            <Box sx={{ marginTop: '10px' }}
                onClick={linkHandler}
            >
                <Button sx={{ padding: '2px' }}
                    variant="contained"
                    color='error'
                    name={name}
                    onClick={() => handler(name)}
                >
                    DEL
                </Button>
            </Box>
        </ListItem >
    );
}