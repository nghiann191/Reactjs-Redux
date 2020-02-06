import React from "react";
import { VictoryPie, VictoryLegend } from "victory";
import { connect } from "react-redux";
import { PieChartLegend } from "./PieChartLegend";
import ChooseDevice from "./ChooseDevice";
import _ from "lodash";

class PieChart extends React.Component {
  render() {
    const data = this.props.data.listDevice;
    const status = this.props.data.isLoading;
    return (
      !status && (
        <div>
          <ChooseDevice />
          <svg viewBox="0 30 1400 700" width="700" height="700">
            <VictoryPie
              standalone={false}
              style={{ labels: { fill: "none" } }}
              innerRadius={100}
              colorScale={[
                "#32aeca",
                "#8e3ace",
                "violet",
                "yellow",
                "orange",
                "blue"
              ]}
              data={_.filter(data, e => e.isHide)}
              x="name"
              y="number"
            />

            <VictoryLegend
              standalone={false}
              data={_.filter(data, e => e.isHide)}
              colorScale={[
                "#32aeca",
                "#8e3ace",
                "violet",
                "yellow",
                "orange",
                "blue"
              ]}
              dataComponent={<PieChartLegend />}
              rowGutter={{ top: 0, bottom: 30 }}
              style={{ labels: { fontSize: 24 } }}
              x={520}
              y={100}
            />
          </svg>
        </div>
      )
    );
  }
}
function mapStateToProps(state) {
  return { data: state.setDevice };
}

export default connect(mapStateToProps, null)(PieChart);
