import React from 'react';
import { Box, ListItemAvatar, Avatar, Typography, Button } from '@mui/material';
import { ListItem, ListItemText } from '../chatStyles';
import { useLinkClickHandler } from "react-router-dom";

export const Chat = ({ name, selected, handler, lastMessage }) => {
    const linkHandler = useLinkClickHandler('/chats');

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
                            <span>{lastMessage}</span>
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