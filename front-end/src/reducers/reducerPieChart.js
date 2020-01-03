import { ActionTypes } from "../constants/constants";

let initialState = [];
export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_DATA:
      return [action.payload, ...state];
    default:
      return state;
  }
}
