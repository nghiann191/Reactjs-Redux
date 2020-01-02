import React from "react";
import { VictoryPie, VictoryLegend } from "victory";
import "./StylePieChart.css";
import { connect } from "react-redux";
import { setData } from "../../actions/index";

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      percentIOS:"",
      percentAndroid:"",
    };
  }
  async componentDidMount() {
    const sum = setData();
    this.setState({
      data: (await sum.payload).data,
      percentIOS: (await sum.payload).data[0].percent,
      percentAndroid: (await sum.payload).data[1].percent
    });
    console.log(this.state.data);
  }
  render() {
    return (
        <svg viewBox="20 20 900 900" width="700" height="700">

          <VictoryPie
            standalone={false}
            style={{ labels: { fill: "none"} }}
            innerRadius={100}
            colorScale={["#32aeca", "#8e3ace"]}
            data={this.state.data}
            x="name"
            y="percent"
          />

          <VictoryLegend
            standalone={false}
            data={this.state.data}
            x={400}
            y={200}
          />
          <text x="22" y="50" >Device Types</text>
          <text x="433" y="237" >{this.state.percentIOS} %</text>
          <text x="615" y="220" >{this.state.percentIOS * 191}</text>
          <text x="433" y="267" >{this.state.percentAndroid} %</text>
          <text x="615" y="250" >{this.state.percentAndroid * 191}</text>
        </svg>
    );
  }
}
function mapStateToProps({ data }) {
  return { data };
}

export default connect(mapStateToProps, null)(PieChart);
