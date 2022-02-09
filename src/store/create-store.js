import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { chatListReducer } from './chat_list'
import { messangerReducer } from "./messanger/reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { botMessage } from "./middlewares";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["profile"],
};

const reducer = combineReducers({
    profile: profileReducer,
    chatList: chatListReducer,
    messanger: messangerReducer
});

export const persReduser = persistReducer(persistConfig, reducer);

export const store = createStore(
    persReduser,
    compose(
        applyMiddleware(botMessage, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export const persistor = persistStore(store);