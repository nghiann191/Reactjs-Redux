import React from "react";
import { connect } from "react-redux";
import { VictoryChart, VictoryLine, VictoryLegend } from "victory";

class LineChart extends React.Component {
  render() {
    const data = this.props.getDataLineChart.getDataLineChart;
    console.log(data)
    const dataLineChart = data.map(e => e.data);
    return (
      <div>
        <VictoryChart width={1000} height={470} scale={{ x: "time" }}>
          <VictoryLine
            style={{
              data: { stroke: "#8e3ace" }
            }}
            data={dataLineChart[0]}
          />
          <VictoryLine
            style={{
              data: { stroke: "#32aeca" }
            }}
            data={dataLineChart[1]}
          />
        </VictoryChart>
        <svg viewBox="0 100 900 500">
        <VictoryLegend
          standalone={false}
          orientation="horizontal"
          data={data}
          colorScale={[
            "#8e3ace",
            "#32aeca",
          ]}
          
          rowGutter={{ top: 0, bottom: 30 }}
          style={{ labels: { fontSize: 18 } }}
          x={520}
          y={100}
        />
        </svg>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    getDataLineChart: state.getDataLineChart
  };
};
export default connect(mapStateToProps, null)(LineChart);
