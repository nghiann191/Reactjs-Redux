import React from "react";
import PieChart from "./components/PieChart/PieChart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setData } from "./actions/index";
// import { ActionTypes } from "./constants/constants";

class App extends React.Component {
  componentDidMount() {
    this.props.setData();
  }
  render() {
    return <PieChart/>;
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setData }, dispatch);
  // khi dùng dispatch bên dưới bị 1 lỗi : mapDispatchToProps() in Connect(App) must return a plain object. Instead received [object Promise].
  // return{
  //   setData : () => dispatch(ActionTypes.SHOW_DATA)
  // }
  
}
export default connect(null, mapDispatchToProps)(App);
