import { render } from "@testing-library/react";
import { createStore, combineReducers } from "redux";
import { chatListReducer } from '../store/chat_list'
import { messangerReducer } from '../store/messanger'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { reducer } from "../store";

export function renderWithRedux(component, initialState) {
    const reducer = combineReducers({
        // profile: profileReducer,
        chatList: chatListReducer,
        messanger: messangerReducer,
        // gists: gistsReducer,
        // signin: signinReducer,
    });

    const store = createStore(reducer, initialState);

    return {
        store,
        ...render(
            <Provider store={store}>
                <BrowserRouter>
                    {component}
                </BrowserRouter>
            </Provider>
        ),
    };
}