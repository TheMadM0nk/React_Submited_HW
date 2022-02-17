import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar, PublicRoute, PrivateRoute } from './components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HomePage, ChatsPage, ProfilePage, Gists, SignUp } from './pages';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from "redux-persist/integration/react";
import { firebaseApp } from './api/firebase';
import { signinStatusFalse, signinStatusTrue } from './store/signin_status/actions';
import { signinSelector } from './store/signin_status';

const theme = createTheme({
  palette: {
    background: {
      paper: '#483a7a',
    }
  },
});

// не уверен что сделал правильно, да и в принципе в необходимости выносы в store
// т.к. предложенный на уроке вариант приобновлении страници не сбрасывается
// думаю что это из-за того что firebase сохраняет данные в браузере, но не уверен...

const StatusWrapper = () => {
  const state = useSelector(signinSelector);
  console.log(state)
  const dispatch = useDispatch();

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {

      if (user) {
        dispatch(signinStatusTrue());
      } else {
        dispatch(signinStatusFalse());
      }
    })
  })

  let auth = state;

  return (

    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar signedIn={state} />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/chats/*" element={
              <PrivateRoute isAuth={auth}>
                <ChatsPage />
              </PrivateRoute>}
            />

            <Route path="/profile" element={
              <PrivateRoute isAuth={auth}>
                <ProfilePage />
              </PrivateRoute>}
            />

            <Route path="/gists/*" element={
              <PrivateRoute isAuth={auth}>
                <Gists />
              </PrivateRoute>}
            />

            <Route path="/auth/*" element={
              <PublicRoute isAuth={auth}>
                <SignUp />
              </PublicRoute>}
            />

            <Route path="/*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StatusWrapper />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);