import { connect } from "react-redux";
import React from "react";
import BarChart from "./BarChart";
import { getDataBarChart } from "../../actions/index";
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
    getDataBarChart: () => dispatch(getDataBarChart())
  };
}

export default connect(null, mapDispatchToProps)(Ranking);