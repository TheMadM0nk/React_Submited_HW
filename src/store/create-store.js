import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { chatListReducer } from './chat_list'
import { messangerReducer } from "./messanger/reducer";
import { gistsReducer } from "./gists";
import { signinReducer } from "./signin_status/reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { botMessage } from "./middlewares";
import { getPublicGistsApi, searchGistsApi } from "../api/gists";
import { getChatsApi, createChatApi } from "../api/chats";
import { getMessagesApi, sendMessageApi } from "../api/messages";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["profile"],
};

export const reducer = combineReducers({
    profile: profileReducer,
    chatList: chatListReducer,
    messanger: messangerReducer,
    gists: gistsReducer,
    signin: signinReducer,
});

export const persReduser = persistReducer(persistConfig, reducer);

export const store = createStore(
    persReduser,
    compose(
        applyMiddleware(
            botMessage,
            thunk.withExtraArgument({
                getPublicGistsApi,
                searchGistsApi,
                getChatsApi,
                getMessagesApi,
                sendMessageApi,
                createChatApi,
            })
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (args) => args
    )
);

export const persistor = persistStore(store);