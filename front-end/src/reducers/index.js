import { combineReducers } from "redux";
import PieChartReducer from "./reducerPieChart";
import PieChartSpinner from "./reducerSpinner";

const rootReducer = combineReducers({
  data: PieChartReducer,
  isLoading: PieChartSpinner
});

export default rootReducer;
