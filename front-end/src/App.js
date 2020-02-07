import React from "react";
import DeviceTypes from "./components/PieChart/DeviceTypes";
import Ranking from "./components/RankingBar/Ranking";
import DeviceByHour from "./components/HeatChart/DeviceByHour";
import "bootstrap/dist/css/bootstrap.min.css";
import DateRange from "./components/DateRange/DateRange";
import Device from "./components/LineChart/Device";


export default class App extends React.Component {
  render() {
    return (
      <div>
        <DateRange/>
        
        <div className="row">
          <div className="col-md-6">
            <DeviceTypes />
          </div>
          <div className="col-md-6">
            <Device />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Ranking />
          </div>
          <div className="col-md-6">
            <DeviceByHour />
          </div>
        </div>
      </div>
    );
  }
}