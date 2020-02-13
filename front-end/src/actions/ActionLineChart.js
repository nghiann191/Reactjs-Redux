import { ActionTypes } from "../constants/constants";
import axios from "axios";

export const getDataLineChart = (startDate, endDate) => {
  let url = `http://localhost:8080/device_line?from=${startDate}to=${endDate}`;
  return dispatch => {
    dispatch({ type: ActionTypes.SHOW_LOADING_LINECHART, isLoadingLine: true });
    axios
      .get(url)
      .then(e =>
        dispatch({ type: ActionTypes.GET_DATA_LINECHART, getDataLineChart: e.data, isLoadingLine: false })
      )
      .catch(error => console.log(error))
      .finally(() => {
        dispatch({
          type: ActionTypes.HIDE_LOADING_LINECHART,
          isLoadingLine: false
        });
      });
  };
};
