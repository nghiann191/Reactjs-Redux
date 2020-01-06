import React from "react";
import { BeatLoader } from "react-spinners";
import { connect } from "react-redux";

class PieChartSpinner extends React.Component {
  render() {
    const {isLoading} = this.props.isLoading;
    console.log(isLoading);
    return isLoading ? <BeatLoader color={"blue"} size={40} /> : null;
  }
}
function mapStateToProps(state){
  return {isLoading : state.isLoading};
}
export default connect(mapStateToProps, null)(PieChartSpinner);