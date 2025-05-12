import { configureStore } from "@reduxjs/toolkit";
import products from "./reducers/products";
import carousel from "./reducers/carousel";
import {api} from './middleware/api';

export default configureStore({
    reducer: {
        products, carousel
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api)
});
