import React from 'react';
import ReactDOM, {render} from 'react-dom';
import App from './App';
import store from "./redux/redux-store.js";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,document.getElementById('root')

)
