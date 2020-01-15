import React from 'react';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';

class HeatChartSpinner extends React.Component{
  render() {
    const {isLoadingHeat} = this.props.getDataHeatChart;
    return (
      <div style={{ display: "flex", marginLeft:"220px" }}>
        <BeatLoader color="red" size={40} loading={isLoadingHeat} />
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    getDataHeatChart: state.getDataHeatChart
  };
}
export default connect(mapStateToProps, null)(HeatChartSpinner);