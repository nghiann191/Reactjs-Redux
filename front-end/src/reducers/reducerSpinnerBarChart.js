import { ActionTypes } from "../constants/constants";

let initialState = true;
export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_LOADING_BARCHART:
      return { isLoadingBar: action.isLoadingBar };
    case ActionTypes.HIDE_LOADING_BARCHART:
      return { isLoadingBar: action.isLoadingBar };
    default:
      return state;
  }
}
