import React from 'react';
import { connect } from 'react-redux';
import {VictoryChart, VictoryLine} from 'victory';

class LineChart extends React.Component{
  render() {
    const data = this.props.getDataLineChart.getDataLineChart;
    const dataLineChart = data.map(e => e.data);
    console.log(dataLineChart[1] )
    return (
      <div>
         <VictoryChart width={800} height={470} scale={{ x: "time" }}
          
          >
              <VictoryLine
                style={{
                  data: { stroke: "#32aeca" }
                }}
                data={dataLineChart[0]}
              />
        <VictoryLine
                style={{
                  data: { stroke: "#8e3ace" }
                }}
                data={dataLineChart[1]}
              />
            </VictoryChart>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    getDataLineChart: state.getDataLineChart
  }
}
export default connect(mapStateToProps, null)(LineChart);