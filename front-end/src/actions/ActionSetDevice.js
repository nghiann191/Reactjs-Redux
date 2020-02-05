import {ActionTypes} from '../constants/constants';
import axios from 'axios';

export const setDevice = (listDevice = [], startDate, endDate) => {
  let url = `http://localhost:8080/device_summary_choose_device?from=${startDate}to=${endDate}`
  return dispatch => {
      dispatch({ type: ActionTypes.SHOW_LOADING_PIECHART, isLoading: true });
      axios.get(url)
      .then(e => {
        dispatch({
          type: ActionTypes.SHOW_DATA,
          data: e.data,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        dispatch({
          type: ActionTypes.HIDE_LOADING_PIECHART,
          isLoading: false
        });
      });
      dispatch({type: ActionTypes.SET_DEVICES, listDevice: listDevice});
    }
    
}
