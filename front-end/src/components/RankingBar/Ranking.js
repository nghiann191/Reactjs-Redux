import { connect } from "react-redux";
import React from "react";
import BarChart from "./BarChart";
import { getDataBarChart, setDate } from "../../actions/index";
import BarChartSpinner from "../Spinners/BarChartSpinner";

class Ranking extends React.Component {
  componentDidMount() {
      this.props.getDataBarChart();
  }
  render() {
    return (
      <div>
        <h3>Ranking</h3>
        <BarChartSpinner />
        <BarChart />
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getDataBarChart: (startDate, endDate) => dispatch(getDataBarChart(startDate, endDate)),
    setDate: (startDate, endDate) => dispatch(setDate(startDate, endDate))
  };
}
export default connect(null, mapDispatchToProps)(Ranking);
