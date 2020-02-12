import React, { useEffect } from "react";
import LineChart from "./LineChart";
import { getDataLineChart } from "../../actions";
import { connect } from "react-redux";

const Device = props => {
  useEffect(() => {
    props.getDataLineChart();
  });
  return (
    <div>
      <h3>Device</h3>
      <LineChart />
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    getDataLineChart: (startDate, endDate) => {
      dispatch(getDataLineChart(startDate, endDate));
    }
  };
};
export default connect(null, mapDispatchToProps)(Device);
