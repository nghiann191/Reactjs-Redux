import { ActionTypes } from "../constants/constants";
import axios from "axios";

export const getDataBarChart = (startDate, endDate) => {
  let url = `http://localhost:8080/ranking?from=${startDate}to=${endDate}`;
  return dispatch => {
    dispatch({ type: ActionTypes.SHOW_LOADING_BARCHART, isLoadingBar: true });
    axios
      .get(url)
      .then(e =>
        dispatch({ type: ActionTypes.GET_DATA_BAR, getDataBarChart: e.data, isLoadingBar: false })
      )
      .catch(error => console.log(error))
      .finally(() => {
        dispatch({
          type: ActionTypes.HIDE_LOADING_BARCHART,
          isLoadingBar: false
        });
      });
  };
};
