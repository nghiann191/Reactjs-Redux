import {ActionTypes} from '../constants/constants';

export const setDate = (startDate, endDate) => {
  return dispatch => {
    dispatch({type: ActionTypes.SET_DATE, date: {startDate, endDate}});
    dispatch({type: ActionTypes.GET_ALL_DATA, })
  }
}