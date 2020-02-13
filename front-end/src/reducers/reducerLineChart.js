import { ActionTypes } from "../constants/constants";

let initialState = {
  getDataLineChart: [],
  isLoadingLine: true
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_DATA_LINECHART:
      return {
        getDataLineChart: action.getDataLineChart,
        isLoadingLine: action.isLoadingLine
      };
    case ActionTypes.SHOW_LOADING_LINECHART:
      return { ...state, isLoadingLine: action.isLoadingLine };
    case ActionTypes.HIDE_LOADING_LINECHART:
      return { ...state, isLoadingLine: action.isLoadingLine };
    default:
      return state;
  }
}
