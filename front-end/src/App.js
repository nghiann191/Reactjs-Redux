import React from "react";
import DeviceTypes from "./components/PieChart/DeviceTypes";
import Ranking from "./components/RankingBar/Ranking";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <DeviceTypes />
        <Ranking />

      </div>
    );
  }
}
