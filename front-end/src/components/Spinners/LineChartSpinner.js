import React from "react";
import { BeatLoader } from "react-spinners";
import { connect } from "react-redux";

class LineChartSpinner extends React.Component {
  render() {
    const { isLoadingLine } = this.props.getDataLineChart;
    return (
      <div style={{ display: "flex", marginLeft: "220px" }}>
        <BeatLoader color={"red"} size={40} loading={isLoadingLine} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { getDataLineChart: state.getDataLineChart };
}
export default connect(mapStateToProps)(LineChartSpinner);
