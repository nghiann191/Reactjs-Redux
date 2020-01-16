import React from "react";
import { connect } from "react-redux";
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLabel } from "victory";
import { BarChartLabel } from "./BarChartLabel";
import _ from "lodash";

class BarChart extends React.Component {
  render() {
    const { getDataBarChart } = this.props.getDataBarChart;
    const status = this.props.getDataBarChart.isLoadingBar;
    const descData = _.sortBy(getDataBarChart, ['day']).reverse();
    return (
      !status && (
        <div style={{ width: "700px", height: "300px" }}>
        <VictoryChart domainPadding={{ x: 15 }}>
          <VictoryBar
            standalone={false}
            barRatio={1.2}
            style={{ data: { fill: "#ccc" } }}
            horizontal
            data={descData}
            x="day"
            y="number"
          />
          <VictoryAxis
            crossAxis
            offsetX={-10}
            style={{ tickLabels: { fill: "none" } }}
            tickLabelComponent={<BarChartLabel data={descData} />}
          />
          <VictoryAxis
            crossAxis
            offsetX={700}
            style={{ tickLabels: { fill: "none" } }}
          />

          <VictoryLabel x={49} y={30} standalone={false} text="Day" />
          <VictoryLabel x={350} y={30} standalone={false} text="Number" />
        </VictoryChart>
      </div>
      )
    );
  }
}
function mapStateToProps(state) {
  return {
    getDataBarChart: state.getDataBarChart,
    allData: state.allData
  };
}

export default connect(mapStateToProps, null)(BarChart);
