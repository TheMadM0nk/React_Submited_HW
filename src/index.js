import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HomePage, ChatsPage, ProfilePage } from './pages';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from "redux-persist/integration/react";

const theme = createTheme({
  palette: {
    background: {
      paper: '#483a7a',
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);