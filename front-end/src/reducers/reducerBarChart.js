import { ActionTypes } from '../constants/constants';

let initialState = [];
export default function(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_DATA_BAR:
            return [...action.getDataBarChart];
        default:
            return state;
    }
}