import { ActionTypes } from '../constants/constants';

export default function(state = [], action) {
    switch (action.type) {
        case ActionTypes.SHOW_DATA:
            return [action.payload.data, ...state];
        default:
            return state;
    }
}