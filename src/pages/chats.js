import { Routes, Route } from 'react-router-dom';
import { Layout, Messanger, ChatList } from '../components';

export const ChatsPage = () => {

    return (

        <Routes >
            <Route
                path='/'
                element={
                    <Layout
                        chatList={<ChatList />}
                        message={<h1>Welcome to the chat room</h1>}
                    />}
            />
            <Route
                path=':chatId'
                element={
                    <Layout
                        chatList={<ChatList />}
                        message={<Messanger />}
                    />}
            />
        </Routes>

    )
}