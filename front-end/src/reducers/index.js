import { combineReducers } from 'redux';
import PieReducer from './reducerPie';

const rootReducer = combineReducers({
    data: PieReducer
});

export default rootReducer;