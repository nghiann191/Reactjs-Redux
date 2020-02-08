import {ActionTypes} from '../constants/constants';
import { setData } from './ActionPieChart';
import { getDataBarChart } from './ActionBarChart';
import { getDataHeatChart } from './ActionHeatChart';
import { getDataLineChart } from './ActionLineChart';

export const setDate = (startDate, endDate) => {
  return dispatch => {
    dispatch({type: ActionTypes.SET_DATE, startDate: startDate, endDate: endDate});
    dispatch(getDataHeatChart(startDate, endDate));
    dispatch(setData(startDate, endDate));
    dispatch(getDataBarChart(startDate, endDate));
    dispatch(getDataLineChart(startDate, endDate));
  }
}