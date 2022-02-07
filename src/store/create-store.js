import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile";
import { chatListReducer } from './chat_list'
import { messangerReducer } from "./messanger/reducer";

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chatList: chatListReducer,
        messanger: messangerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);