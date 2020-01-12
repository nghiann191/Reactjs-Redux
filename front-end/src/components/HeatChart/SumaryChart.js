import React from 'react';
import Chart from 'react-apexcharts';
import { connect } from 'react-redux';
import _ from 'lodash';

class SumaryChart extends React.Component{
  render() {
    const dataHeat = this.props.getDataHeatChart;
    const list = dataHeat.getDataHeatChart.map(e => e.data.map(a => a.y));
    console.log(list, list[0], _.sum(list[0]));
    const series = [{
      data: [_.sum(list[0]),_.sum(list[1]),_.sum(list[2]),_.sum(list[3]),_.sum(list[4]),_.sum(list[5]),_.sum(list[6])]
    }];
    const options = {
      chart: {
        type: 'bar',
        height: 180,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: true,
        
      },
      colors: ['#589e71'],
      xaxis: {
        categories: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      },
      // yaxis: {
      //   show: false
      // }
    }
    return (
        <Chart
          options={options}
          series={series}
          type='bar'
          height="180"
        />
    );
  }
}
function mapStateToProps(state){
  return{
    getDataHeatChart: state.getDataHeatChart
  };
}

export default connect(mapStateToProps, null)(SumaryChart);