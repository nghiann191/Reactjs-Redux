import React from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";

class HeatChart extends React.Component {
  render() {
    const getDataHeat = this.props.getDataHeatChart;
    const options = {
      chart: {
        height: 200,
        type: "heatmap",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Device by hour",
        align: "left",
        margin: 0,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "16px",
          color: "#263238"
        }
      },
      yaxis: {
          show: false
      },
      colors: ["#6232ca"]
    };
    return (
        <Chart
          options={options}
          series={getDataHeat.getDataHeatChart}
          type="heatmap"
          height="200"
        />
    );
  }
}
function mapStateToProps(state) {
  return {
    getDataHeatChart: state.getDataHeatChart
  };
}
export default connect(mapStateToProps, null)(HeatChart);
