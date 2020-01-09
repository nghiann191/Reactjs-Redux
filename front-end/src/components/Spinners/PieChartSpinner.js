import React from "react";
import { BeatLoader } from "react-spinners";
import { connect } from "react-redux";
import { VictoryPie } from "victory";

class PieChartSpinner extends React.Component {
  render() {
    const { isLoading } = this.props.data;
    return (
      <div>
        <div style={{ display: "flex", marginLeft: "220px" }}>
          <BeatLoader color={"blue"} size={40} loading={isLoading} />
        </div>
        {isLoading && (
          <div style={{ width: "200px", height: "200px", opacity: "0.3" }}>
            <VictoryPie
              style={{ labels: { fill: "none" } }}
              innerRadius={100}
              colorScale={["#d9d4dc", "black"]}
              data={[
                { x: "1", y: "1" },
                { x: "2", y: "1" }
              ]}
            />
            <div style={{color:"red"}}>No data to display</div>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { data: state.data };
}
export default connect(mapStateToProps)(PieChartSpinner);
