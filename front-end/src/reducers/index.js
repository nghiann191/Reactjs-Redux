import { combineReducers } from "redux";
import PieChartReducer from "./reducerPieChart";
import BarChartReducer from "./reducerBarChart";
import HeatChartReducer from './reducerHeatChart';
import DateRangeReducer from './reducerDateRange';
import SetDeviceReducer from './reducerSetDevice';

const rootReducer = combineReducers({
  data: PieChartReducer,
  getDataBarChart: BarChartReducer,
  getDataHeatChart: HeatChartReducer,
  allData: DateRangeReducer,
  setDevice: SetDeviceReducer
});

export default rootReducer;

