import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'carousel',
    initialState: {
        carousel: {
            products: [],
        },
    },
    reducers: {
        getFromResponse: (state, action) => {
            state.carousel = action.payload;
        },
        errRes:
            (state, action) => {
                toast.error("Xatolik mavjud!");
            }
    }
});

export const { getFromResponse , errRes} = slice.actions;

export const getCarousel = () => apiCall({
    url: "/carousel",
    method: "get",
    onSuccess: getFromResponse,
});


export default slice.reducer;
