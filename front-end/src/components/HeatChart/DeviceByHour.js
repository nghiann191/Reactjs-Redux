import React from 'react';
import { connect } from 'react-redux';
import { getDataHeatChart } from "../../actions/index"
import HeatChart from './HeatChart';
import SumaryChart from './SumaryChart';
import 'bootstrap/dist/css/bootstrap.min.css';

class DeviceByHour extends React.Component{
  componentDidMount(){
    this.props.getDataHeatChart();
  }
  render() {
    return (
      <div className="row">
  <div className="col-md-8" style={{padding:"0"}}><HeatChart/></div>
  <div className="col-md-4" style={{padding:"0",marginTop:"10px"}}><SumaryChart/></div>
</div>
     
    );
  }
}
function mapDispatchToProps(dispatch) {
  return{
    getDataHeatChart: () => dispatch(getDataHeatChart())
  };
}

export default connect(null, mapDispatchToProps)(DeviceByHour);