import { combineReducers } from "redux";
import PieChartReducer from "./reducerPieChart";
import PieChartSpinner from "./reducerSpinner";
import BarChartReducer from './reducerBarChart';
import BarChartSpinner from './reducerSpinnerBarChart';

const rootReducer = combineReducers({
    data: PieChartReducer,
    isLoading: PieChartSpinner,
    getDataBarChart: BarChartReducer,
    isLoadingBar: BarChartSpinner
});

export default rootReducer;