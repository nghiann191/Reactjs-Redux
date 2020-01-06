import React from "react";
import PieChart from "./components/PieChart/PieChart";
import { connect } from "react-redux";
import { setData } from "./actions/index";
import PieChartSpinner from "./components/Spinners/PieChartSpinner";

class App extends React.Component {
  componentDidMount() {
    this.props.setData();
  }
  render() {
    return(
      <div>
        <PieChartSpinner/>
      <PieChart/>
      </div>);
  }
}
function mapDispatchToProps(dispatch) {
  return{
    setData : () => dispatch(setData())
  }
  
}
export default connect(null, mapDispatchToProps)(App);
