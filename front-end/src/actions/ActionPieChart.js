import { ActionTypes } from "../constants/constants";
import axios from "axios";

export const setData = () => {
    let url = "http://localhost:8080/device_summary";
    let headers = {
        token: localStorage.getItem("token")
    };
    return dispatch => {
        dispatch({ type: ActionTypes.SHOW_LOADING_PIECHART, isLoading: true });
        axios
            .get(url, { headers })
            .then(e => {
                dispatch({ type: ActionTypes.SHOW_DATA, data: e.data });
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                dispatch({ type: ActionTypes.HIDE_LOADING_PIECHART, isLoading: false });
            });
    };
};