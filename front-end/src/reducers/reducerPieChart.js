import { ActionTypes } from "../constants/constants";

let initialState = {
  data:[],
  isLoading:true
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_DATA:
      return {data:action.data, isLoading:action.isLoading};
    case ActionTypes.SHOW_LOADING_PIECHART:
        return {...state, isLoading: action.isLoading };
    case ActionTypes.HIDE_LOADING_PIECHART:
        return {...state, isLoading: action.isLoading };
    default:
      return state;
  }

}