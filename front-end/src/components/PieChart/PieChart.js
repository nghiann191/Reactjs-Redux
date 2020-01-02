import React from "react";
import axios from "axios";
import { VictoryPie, VictoryLegend } from "victory";
import "./StylePie.css";
import {connect} from 'react-redux';
import {setData} from '../../actions/index';

class PieChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
    }
  }
  // async componentDidMount() {
  //   let url = "http://localhost:8080/device_summary";
  //   let headers = {
  //     token: localStorage.getItem("token")
  //   };
  //   try {
  //     const data = await axios.get(url, { headers });
  //     if(data.request.status === 200){
  //       this.setState({
  //       data: data.data
  //     },
  //       )
  //     }
            
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  async componentDidMount(){
     const sum = setData();
    this.setState({
      data:(await sum.payload).data
    });
    console.log(this.state.data);
  }
  render() {
   
    return (
      <div className="pie-pie">
        <div className="pie-chart">
          <VictoryPie
            style={{ labels: { fill: "none" } }}
            innerRadius={100}
            colorScale={["#32aeca", "#8e3ace"]}
            data={this.state.data}
            x = "name"
            y = "percent"
          />
        </div>
        <div className="pie-legend">
          <VictoryLegend
            width={100}
            data={[
              { name: "IOS", symbol: { fill: "#32aeca", type: "square" } },
              { name: "Android", symbol: { fill: "#8e3ace" } }
            ]}
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps({data}){
  return {data};
}

export default connect(mapStateToProps,null)(PieChart);
