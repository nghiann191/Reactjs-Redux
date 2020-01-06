import React from "react";
import PieChart from "./components/PieChart/PieChart";
import { connect } from "react-redux";
import { setData } from "./actions/index";

class App extends React.Component {
  componentDidMount() {
    this.props.setData();
  }
  render() {
    return <PieChart/>;
  }
}
function mapDispatchToProps(dispatch) {
  return{
    setData : () => dispatch(setData())
  }
  
}
export default connect(null, mapDispatchToProps)(App);
