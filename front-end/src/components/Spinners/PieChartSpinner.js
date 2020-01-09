import React from "react";
import { BeatLoader } from "react-spinners";
import { connect } from "react-redux";

class PieChartSpinner extends React.Component {
  render() {
    const { isLoading } = this.props.data;
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BeatLoader color={"blue"} size={40} loading={isLoading} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { data: state.data };

}
export default connect(mapStateToProps)(PieChartSpinner);
