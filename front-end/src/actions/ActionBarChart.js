import {ActionTypes} from '../constants/constants';
import axios from 'axios';

export const getDataBarChart = () => {
  let url ="http://localhost:8080/ranking";
  return dispatch => {
    axios.get(url)
    .then(e => dispatch({type:ActionTypes.GET_DATA_BAR, getDataBarChart: e.data}))
    .catch(error => console.log(error))
    .finally()
  }
}