<<<<<<< HEAD
=======
import { combineReducers } from "redux";
import PieChartReducer from "./reducerPieChart";
import BarChartReducer from "./reducerBarChart";
import HeatChartReducer from './reducerHeatChart';

const rootReducer = combineReducers({
  data: PieChartReducer,
  getDataBarChart: BarChartReducer,
  getDataHeatChart: HeatChartReducer
});

export default rootReducer;

>>>>>>> dd81d8d2... ve duoc heatmap
