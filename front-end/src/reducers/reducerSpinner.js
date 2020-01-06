import {ActionTypes} from '../constants/constants';

let initialState = { type: ActionTypes.SHOW_LOADING, isLoading: true };
export default function(state = initialState,action){
  switch (action.type){
    case ActionTypes.SHOW_LOADING:
      return {isLoading: action.isLoading};
    case ActionTypes.HIDE_LOADING:
      return {isLoading: action.isLoading};
    default:
      return state;
  }

}