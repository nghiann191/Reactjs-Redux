import React from "react";
import { connect } from "react-redux";
import { VictoryChart, VictoryBar } from "victory";

class BarChart extends React.Component {
  render() {
    const { getDataBarChart } = this.props;
    return (
      <VictoryChart domainPadding={{ x: 15 }}>
        
          <VictoryBar
            standalone={false}
            barRatio={1.2}
            style={{ data: { fill: "#ccc" }, labels: { fill: "white" } }}
            labels={({ datum }) => datum.y}
            horizontal
            data={getDataBarChart}
            x="day"
            y="number"
          />
        
      </VictoryChart>
    );
  }
}
function mapStateToProps(state) {
  return { getDataBarChart: state.getDataBarChart };
}

export default connect(mapStateToProps, null)(BarChart);
