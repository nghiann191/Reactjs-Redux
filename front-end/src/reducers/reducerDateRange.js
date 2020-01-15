import {ActionTypes} from '../constants/constants';

const initialState = {
  date : {
    startDate: null,
    endDate: null
  }
};

export default function(state = initialState, action){
  switch (action.type){
    case ActionTypes.SET_DATE:
      return {
        date: {
          startDate: action.startDate,
          endDate: action.endDate
        }
      }
    case ActionTypes.GET_ALL_DATA:
      return{}
    default:
      return state
  }
}