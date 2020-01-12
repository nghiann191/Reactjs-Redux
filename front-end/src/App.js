<<<<<<< HEAD
import React from 'react';

export default class App extends React.Component {
    render() {
        return ("");
    }
}
=======
import React from "react";
import DeviceTypes from "./components/PieChart/DeviceTypes";
import Ranking from "./components/RankingBar/Ranking";
import DeviceByHour from "./components/HeatChart/DeviceByHour";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <DeviceTypes />
        <Ranking />
        <DeviceByHour/>
      </div>
    );
  }
}


>>>>>>> dd81d8d2... ve duoc heatmap
