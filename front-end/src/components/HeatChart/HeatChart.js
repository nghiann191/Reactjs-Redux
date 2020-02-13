import React from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
import _ from "lodash";

const HeatChart = (props) => {
    const getDataHeat = props.getDataHeatChart;
    const status = props.getDataHeatChart.isLoadingHeat;
    const series = getDataHeat.getDataHeatChart;
    const options = {
      chart: {
        height: 300,
        type: "heatmap",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },

      yaxis: {
        show: false
      },
      colors: ["#6232ca"]
    };
    return (
      !status && (
        <Chart
          options={options}
          series={_.reverse(series)}
          type="heatmap"
          height="300"
        />
      )
    );
}
function mapStateToProps(state) {
  return {
    getDataHeatChart: state.getDataHeatChart
  };
}
export default connect(mapStateToProps, null)(HeatChart);
