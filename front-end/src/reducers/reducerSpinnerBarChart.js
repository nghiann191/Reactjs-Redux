import { ActionTypes } from "../constants/constants";

let initialState = {};
export default function(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SHOW_LOADING_BARCHART:
            console.log("show bar", action.isLoadingBar);
            return { isLoadingBar: action.isLoadingBar };
        case ActionTypes.HIDE_LOADING_BARCHART:
            console.log("hide bar", action.isLoadingBar);
            return { isLoadingBar: action.isLoadingBar };
        default:
            return state;
    }
}