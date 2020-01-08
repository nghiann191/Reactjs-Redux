import { ActionTypes } from "../constants/constants";

let initialState = true;
export default function(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SHOW_LOADING_PIECHART:
            return { isLoading: action.isLoading };
        case ActionTypes.HIDE_LOADING_PIECHART:
            return { isLoading: action.isLoading };
        default:
            return state;
    }
}