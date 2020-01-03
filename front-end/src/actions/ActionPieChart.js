import { ActionTypes } from "../constants/constants";
import axios from "axios";

export async function setData() {
  let url = "http://localhost:8080/device_summary";
  let headers = {
    token: localStorage.getItem("token")
  };
  const res = await axios.get(url, { headers });
  return {
    type: ActionTypes.SHOW_DATA,
    payload: res.data
  };
}
