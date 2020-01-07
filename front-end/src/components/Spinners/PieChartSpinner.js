import React from "react";
import { BeatLoader } from "react-spinners";
import { connect } from "react-redux";

class PieChartSpinner extends React.Component {
  render() {
    const { isLoading } = this.props.isLoading;
    console.log(isLoading);
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BeatLoader color={"blue"} size={40} loading={isLoading} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { isLoading: state.isLoading };
}
export default connect(mapStateToProps)(PieChartSpinner);
