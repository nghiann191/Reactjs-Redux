import { ActionTypes } from "../constants/constants";

let initialState = {};
export default function(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SHOW_LOADING_PIECHART:
            console.log("show pie", action.isLoading);
            return { isLoading: action.isLoading };
        case ActionTypes.HIDE_LOADING_PIECHART:
            console.log("hide pie", action.isLoading);
            return { isLoading: action.isLoading };

        default:
            return state;
    }
}