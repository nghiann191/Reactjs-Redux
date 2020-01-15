import { combineReducers } from "redux";
import PieChartReducer from "./reducerPieChart";
import BarChartReducer from "./reducerBarChart";
import HeatChartReducer from './reducerHeatChart';
import DateRangeReducer from './reducerDateRange';

const rootReducer = combineReducers({
  data: PieChartReducer,
  getDataBarChart: BarChartReducer,
  getDataHeatChart: HeatChartReducer,
  date: DateRangeReducer
});

export default rootReducer;

