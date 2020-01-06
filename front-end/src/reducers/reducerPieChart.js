import { ActionTypes } from "../constants/constants";

let initialState = [];
export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_DATA:
      return [...action.data];
    default:
      return state;
  }
}
