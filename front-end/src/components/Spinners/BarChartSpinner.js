import React from "react";
import { BeatLoader } from "react-spinners";
import { connect } from "react-redux";

class BarChartSpinner extends React.Component {
  render() {
    const { isLoadingBar } = this.props.getDataBarChart;
    return (
      <div style={{ display: "flex", marginLeft: "220px" }}>
        <BeatLoader color={"blue"} size={40} loading={isLoadingBar} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { getDataBarChart: state.getDataBarChart };
}
export default connect(mapStateToProps)(BarChartSpinner);
