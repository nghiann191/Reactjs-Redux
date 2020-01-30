import {ActionTypes} from '../constants/constants';
import { setData } from './ActionPieChart';

export const setDevice = (listDevice, startDate, endDate) => {
  return dispatch => {
    dispatch({type: ActionTypes.SET_DEVICES, listDevice: listDevice});
    dispatch(setData(startDate, endDate))
  }
}