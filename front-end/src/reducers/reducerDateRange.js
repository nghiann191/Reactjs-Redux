import {ActionTypes} from '../constants/constants';

const initialState = {
  startDate: new Date(),
  endDate: new Date()
};

export default function(state = initialState, action){
  switch (action.type){
    case ActionTypes.SET_DATE:
      return {
        startDate: action.startDate,
        endDate: action.endDate
      }
    default:
      return state
  }
}