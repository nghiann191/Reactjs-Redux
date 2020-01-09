import React from "react";
import { VictoryPie, VictoryLegend } from "victory";
import { connect } from "react-redux";
import { PieChartLegend } from "./PieChartLegend";

class PieChart extends React.Component {
  render() {

    const { data } = this.props.data;
    return (
      <svg viewBox="0 30 1400 400" width="700" height="300">

        <VictoryPie
          standalone={false}
          style={{ labels: { fill: "none" } }}
          innerRadius={100}
          colorScale={["#32aeca", "#8e3ace"]}
          data={data}
          x="name"
          y="number"
        />

        <VictoryLegend
          standalone={false}
          data={data}
          colorScale={["#32aeca", "#8e3ace"]}
          dataComponent={<PieChartLegend />}
          rowGutter={{ top: 0, bottom: 30 }}
          style={{ labels: { fontSize: 24 } }}
          x={520}
          y={100}
        />
      </svg>

    );
  }
}
function mapStateToProps(state) {
  return { data: state.data };
}

export default connect(mapStateToProps, null)(PieChart);
