import React from "react";
import PieChart from "../PieChart/PieChart";
import { connect } from "react-redux";
import { setData, setDevice} from '../../actions/index';
import PieChartSpinner from "../Spinners/PieChartSpinner";

class DeviceTypes extends React.Component {
  componentDidMount() {
      this.props.setDevice()
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
    setDevice: (data, startDate, endDate) => dispatch(setDevice(data, startDate, endDate)),
  };
}
export default connect(null, mapDispatchToProps)(DeviceTypes);