import { combineReducers } from "redux";
import PieChartReducer from "./reducerPieChart";
import BarChartReducer from "./reducerBarChart";

const rootReducer = combineReducers({
  data: PieChartReducer,
  getDataBarChart: BarChartReducer
});

export default rootReducer;