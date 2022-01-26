import React, { useState, useEffect } from 'react';
import {
    List,
    ListItemAvatar,
    Avatar,
    Divider,
    Typography
} from '@mui/material';
// import '../../styles.module.css';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import MuiListItemText from '@mui/material/ListItemText';
import MuiListItem from '@mui/material/ListItem';
import { Box } from '@mui/system';

const theme = createTheme({
    palette: {
        background: {
            paper: '#483a7a',
        }
    },
});

const ListItem = styled(MuiListItem)({
    '&.Mui-selected': {
        backgroundColor: '#0d47a1'
    }
});

const Button = styled(MuiButton)({
    color: '#fff',
    backgroundColor: '#0d47a1',

    ':hover': {
        backgroundColor: '#1565c0',
    }
});

const ListItemText = styled(MuiListItemText)({
    '& .MuiListItemText-primary': {
        color: '#b3e5fc',
    },
    '& .MuiListItemText-secondary': {
        color: 'gray'
    }
});


export const ChatList = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [chatList, setChatList] = useState([
        {
            id: 1,
            name: 'gogi'
        },
        {
            id: 2,
            name: 'gogi 2'
        }
    ]);

    const addChat = () => {
        let user = prompt('Enter User name');
        if (user !== '') {
            setChatList([...chatList, { id: chatList.length + 1, name: user }])
        } else {
            alert('Enter User name!')
        }
    };

    const selectHandler = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <ThemeProvider theme={theme}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {chatList.map((chat, index) => (
                    <div key={index} >
                        <ListItem alignItems="flex-start"
                            button
                            selected={selectedIndex === chat.id}
                            onClick={(event) => selectHandler(event, chat.id)}
                        >
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={chat.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                        >
                                            {"Last message text…"}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider component="li" />
                    </div>
                ))}
                <Box sx={{ margin: '10px' }} >
                    <Button sx={{ width: '100%' }} onClick={addChat} >Add Chat</Button>
                </Box>
            </List>
        </ThemeProvider>
    );
}