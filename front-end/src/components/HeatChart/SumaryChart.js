import React from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
import _ from "lodash";

class SumaryChart extends React.Component {
  render() {
    const dataHeat = this.props.getDataHeatChart;
    const list = dataHeat.getDataHeatChart.map(e => e.data.map(a => a.y));
    const series = [
      {
        data: [
          _.sum(list[0]),
          _.sum(list[1]),
          _.sum(list[2]),
          _.sum(list[3]),
          _.sum(list[4]),
          _.sum(list[5]),
          _.sum(list[6])
        ]
      }
    ];
    const options = {
      chart: {
        type: "bar",
        height: 260,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '100%'
        }
      },
      dataLabels: {
        enabled: true,

      },
      colors: ["#589e71"],
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        labels: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          offsetY: 3,
          style: {
            fontSize: '13px'
          }
        }
      }
    };
    return (
      <div style={{ width: "200px" }}>
        <Chart options={options} series={series} type="bar" height="260" />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    getDataHeatChart: state.getDataHeatChart
  };
}

export default connect(mapStateToProps, null)(SumaryChart);
