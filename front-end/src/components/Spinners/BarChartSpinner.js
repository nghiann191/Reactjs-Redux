import React from "react";
import { BeatLoader } from "react-spinners";
import { connect } from "react-redux";

class BarChartSpinner extends React.Component {
  render() {
    const { isLoadingBar } = this.props.isLoadingBar;
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BeatLoader color={"blue"} size={40} loading={isLoadingBar} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { isLoadingBar: state.isLoadingBar };
}
export default connect(mapStateToProps)(BarChartSpinner);