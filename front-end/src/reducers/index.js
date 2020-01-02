import { combineReducers } from 'redux';
import PieChartReducer from './reducerPieChart';

const rootReducer = combineReducers({
    data: PieChartReducer
});

export default rootReducer;