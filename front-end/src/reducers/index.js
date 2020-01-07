import { combineReducers } from "redux";
import PieChartReducer from "./reducerPieChart";
import PieChartSpinner from "./reducerSpinner";
import BarChartReducer from './reducerBarChart';

const rootReducer = combineReducers({
    data: PieChartReducer,
    isLoading: PieChartSpinner,
    getDataBarChart: BarChartReducer
});

export default rootReducer;