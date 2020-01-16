import {ActionTypes} from '../constants/constants';

const initialState = {
  startDate: null,
  endDate: null,
  // allData: {}
};

export default function(state = initialState, action){
  switch (action.type){
    case ActionTypes.SET_DATE:
      return {
        startDate: action.startDate,
        endDate: action.endDate
      }
    // case ActionTypes.GET_ALL_DATA:
    //   return{
    //     ...state,
    //     allData: action.allData
    //   }
    default:
      return state
  }
}