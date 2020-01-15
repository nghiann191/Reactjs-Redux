import { ActionTypes } from "../constants/constants";

let initialState = {
  getDataHeatChart: [],
  isLoadingHeat: true
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_DATA_HEATCHART:
      return {
        getDataHeatChart: action.getDataHeatChart,
        isLoadingHeat: action.isLoadingHeat
      };
    case ActionTypes.SHOW_LOADING_HEATCHART:
      return { ...state, isLoadingHeat: action.isLoadingHeat };
    case ActionTypes.HIDE_LOADING_HEATCHART:
      return { ...state, isLoadingHeat: action.isLoadingHeat };
    default:
      return state;
  }
}