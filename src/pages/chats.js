import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout, Messanger, ChatList } from '../components';
import { getChatsFB } from '../store/chat_list';
import { getMessages } from '../store/messanger';

export const ChatsPage = () => {
    const dispatch = useDispatch();
    const { pending, error } = useSelector((state) => state.chatList);
    useEffect(() => {
        dispatch(getChatsFB());
        dispatch(getMessages());
    }, [dispatch])

    if (pending) {
        return (
            <Layout
                chatList={<h1>Loading...</h1>}
                message={<h1>Welcome to the chat room</h1>}
            />
        )
    }

    if (error) {
        return <h1>error...</h1>;
    }

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