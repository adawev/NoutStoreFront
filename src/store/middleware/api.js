import axios from "axios";

export const api = ({ dispatch }) => next => action => {
    if (action.type !== "api/apiCall") return next(action);

    const { url, method, data, onSuccess, onFail } = action.payload;

    axios({
        baseURL: "http://localhost:8080/api",
        url,
        method,
        data,
    })
        .then(({ data }) => {
            if (onSuccess) dispatch(onSuccess(data));
        })
        .catch((error) => {
            const errorMessage = error.response ? error.response.data : error.message;
            if (onFail) dispatch(onFail(errorMessage));
        });
};
