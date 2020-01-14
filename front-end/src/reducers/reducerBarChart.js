import { ActionTypes } from "../constants/constants";

let initialState = {
  getDataBarChart: [],
  isLoadingBar: true
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_DATA_BAR:
      return {
        getDataBarChart: action.getDataBarChart,
        isLoadingBar: action.isLoadingBar
      };
    case ActionTypes.SHOW_LOADING_BARCHART:
      return { ...state, isLoadingBar: action.isLoadingBar };
    case ActionTypes.HIDE_LOADING_BARCHART:
      return { ...state, isLoadingBar: action.isLoadingBar };
    default:
      return state;
  }
}