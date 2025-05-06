import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import 'antd/dist/reset.css';
import {Provider} from "react-redux";
import store from "./store/store";
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ToastContainer/>
            <App/>
        </Provider>

    </BrowserRouter>
);

reportWebVitals();
