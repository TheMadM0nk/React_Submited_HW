import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HomePage, ChatsPage, ProfilePage } from './pages';

const theme = createTheme({
  palette: {
    background: {
      paper: '#483a7a',
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chats/*" element={<ChatsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);