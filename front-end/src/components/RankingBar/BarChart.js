import React from "react";
import { connect } from "react-redux";
import {VictoryChart,VictoryBar} from 'victory';

class BarChart extends React.Component {
 
  render() {
    const {getDataBarChart} = this.props;
    console.log(getDataBarChart);
    return (
      <svg viewBox="0 0 800 800" width="700" height="400">
        <VictoryChart>
          <VictoryBar
            horizontal
            data={getDataBarChart}
            
          />
        </VictoryChart>
      </svg>
    );
  }
}
function mapStateToProps(state){
  return {getDataBatChart : state.getDataBarChart};
}

export default connect(mapStateToProps, null)(BarChart);