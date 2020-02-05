import {ActionTypes} from '../constants/constants';

const initialState = {
  listDevice: [],
  isLoading: true
}

export default function(state = initialState, action){
  switch (action.type) {
    case ActionTypes.SHOW_DATA:
      return {listDevice:action.data, isLoading:action.isLoading};
    case ActionTypes.SET_DEVICES:
      return {...state, listDevice: action.listDevice}
    case ActionTypes.SHOW_LOADING_PIECHART:
        return {...state, isLoading: action.isLoading };
    case ActionTypes.HIDE_LOADING_PIECHART:
        return {...state, isLoading: action.isLoading };
    default:
      return state;
  }
}