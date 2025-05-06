import { configureStore } from "@reduxjs/toolkit";
import products from "./reducers/products";
import {api} from './middleware/api';

export default configureStore({
    reducer: {
        products
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api)
});
