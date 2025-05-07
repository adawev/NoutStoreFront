import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        productDetail: null,
    },
    reducers: {
        getFromResponse: (state, action) => {
            state.products = action.payload;
        },
        saveSuccess: (state, action) => {
            state.products.unshift(action.payload);
            toast.success("Successfully added product!");
        },
        getProductDetailSuccess: (state, action) => {
            state.productDetail = action.payload;
        },
        errRes:
            (state, action) => {
                toast.error("Xatolik mavjud!");
            }
    }
});

export const { getFromResponse,saveSuccess, getProductDetailSuccess , errRes} = slice.actions;

export const getAllProducts = () => apiCall({
    url: "/product",
    method: "get",
    onSuccess: getFromResponse,
});

export const saveProduct = (data) => apiCall({
    url: "/product",
    method: "post",
    data: data,
    onSuccess: saveSuccess,
    onFail: errRes,
});
export const getProductById = (id) => apiCall({
    url: `/product/${id}`,
    method: "get",
    onSuccess: getProductDetailSuccess,
    onFail: errRes,
});
export default slice.reducer;
