import { ActionTypes } from '../constants/constants';
import axios from 'axios';

export function setData(data) {
    let url = "http://localhost:8080/device_summary";
    let headers = {
        token: localStorage.getItem("token")
    };
    const res = axios.get(url, { headers });
    return {
        type: ActionTypes.SHOW_DATA,
        payload: res
    };
}