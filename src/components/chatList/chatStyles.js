import MuiButton from '@mui/material/Button';
import MuiListItemText from '@mui/material/ListItemText';
import MuiListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';

export const ListItem = styled(MuiListItem)({
    '&.Mui-selected': {
        backgroundColor: '#0d47a1'
    },

    ':hover': {
        backgroundColor: '#1565c0',
    },

    backgroundColor: '#5d4c9b',
});

export const Button = styled(MuiButton)({
    color: '#fff',
    backgroundColor: '#0d47a1',

    ':hover': {
        backgroundColor: '#1565c0',
    },

    border: '1px solid #3a3a3a',
});

export const ListItemText = styled(MuiListItemText)({
    '& .MuiListItemText-primary': {
        color: '#b3e5fc',
    },
    '& .MuiListItemText-secondary': {
        color: 'gray'
    }
});