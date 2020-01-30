import {ActionTypes} from '../constants/constants';

const initialState = {
  listDevice: []
}

export default function(state = initialState, action){
  switch (action.type){
    case ActionTypes.SET_DEVICES:
      return {
        listDevice: action.listDevice
      }
    default:
      return state
  }
}