import React from "react";
import PieChart from "../PieChart/PieChart";
import { connect } from "react-redux";
import { setData} from '../../actions/index';
import PieChartSpinner from "../Spinners/PieChartSpinner";

class DeviceTypes extends React.Component {
  componentDidMount() {
      this.props.setData()
  }
  render() {
    return (
      <div>
        <h3>Device Types</h3>
        <PieChartSpinner />
        <PieChart />
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setData: (startDate, endDate) => dispatch(setData(startDate, endDate)),
  };
}
export default connect(null, mapDispatchToProps)(DeviceTypes);