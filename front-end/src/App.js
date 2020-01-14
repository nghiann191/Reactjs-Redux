import React from "react";
import DeviceTypes from "./components/PieChart/DeviceTypes";
import Ranking from "./components/RankingBar/Ranking";
import DeviceByHour from "./components/HeatChart/DeviceByHour";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <DeviceTypes />

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


