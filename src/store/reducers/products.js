import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'products',
    initialState: {
        products: [],
    },
    reducers: {
        getFromResponse: (state, action) => {
            state.products = action.payload;
        },
        saveSuccess: (state, action) => {
            state.products.unshift(action.payload);
            toast.success("Successfully added product!");
        },
        errRes:
            (state, action) => {
                toast.error("Xatolik mavjud!");
            }
    }
});

export const { getFromResponse,saveSuccess, errRes} = slice.actions;

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
export default slice.reducer;
