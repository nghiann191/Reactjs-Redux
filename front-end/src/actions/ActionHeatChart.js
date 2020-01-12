import { ActionTypes } from "../constants/constants";
import axios from "axios";

export const getDataHeatChart = () => {
  let url = "http://localhost:8080/device_by_hour";
  return dispatch => {
    dispatch({ type: ActionTypes.SHOW_LOADING_HEATCHART, isLoadingHeat: true });
    axios
      .get(url)
      .then(e =>
        dispatch({ type: ActionTypes.GET_DATA_HEATCHART, getDataHeatChart: e.data, isLoadingHeat: false })
      )
      .catch(error => console.log(error))
      .finally(() => {
        dispatch({
          type: ActionTypes.HIDE_LOADING_HEATCHART,
          isLoadingHeat: false
        });
      });
  };
};
