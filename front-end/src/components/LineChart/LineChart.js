import React, { useState } from "react";
import { connect } from "react-redux";
import {
  VictoryChart,
  VictoryLine,
  VictoryLegend,
  VictoryAxis,
  VictoryTheme
} from "victory";
import _ from "lodash";
import moment from "moment";
import { Button } from "reactstrap";
import LineChartSpinner from "../Spinners/LineChartSpinner";

const LineChart = props => {
  const [state, setState] = useState("day");
  let dataLabel;
  const data = props.getDataLineChart.getDataLineChart;
  switch (state) {
    case "day": {
      dataLabel = _.map(data, (item, index) => ({
        name: item.name,
        data: _.map(data[index].data, b => ({
          x: moment(b.x).format("LL"),
          y: b.y
        }))
      }));
      break;
    }
    case "week": {
      dataLabel = _.map(data, (item, index) => ({
        name: item.name,
        data: _.map(
          _.uniqBy(item.data, e => moment(e.x).format("GGGG WW")),
          b => ({
            x: moment(b.x).format("GGGG WW"),
            y: _.reduce(
              _.filter(
                data[index].data,
                c =>
                  moment(c.x).format("GGGG WW") ===
                  moment(b.x).format("GGGG WW")
              ),
              (total, item) => total + item.y,
              0
            )
          })
        )
      }));
      break;
    }
    case "month": {
      dataLabel = _.map(data, (item, index) => ({
        name: item.name,
        data: _.map(
          _.uniqBy(item.data, a => moment(a.x).format("M Y")),
          b => ({
            x: moment(b.x).format("MMMM YYYY"),
            y: _.reduce(
              _.filter(
                data[index].data,
                c => moment(c.x).format("M Y") === moment(b.x).format("M Y")
              ),
              (total, item) => total + item.y,
              0
            )
          })
        )
      }));
      break;
    }
    default: {
      
    }
  }

  const color = ["#8e3ace", "#32aeca"];
  const status = props.getDataLineChart.isLoadingLine;
  return (
    <div>
      <div style={{ float: "right" }}>
        <Button color="link" onClick={() => setState("day")}>
          Day
        </Button>
        <Button color="link" onClick={() => setState("week")}>
          Week
        </Button>
        <Button color="link" onClick={() => setState("month")}>
          Month
        </Button>
      </div>
      {status ? (
        <LineChartSpinner />
      ) : (
        <div>
          <VictoryChart width={1000} height={470} scale={{ x: "time" }}>
            {state === "day" ? (
              <VictoryAxis
                standalone={false}
                crossAxis
                theme={VictoryTheme.material}
                fixLabelOverlap={true}
                style={{ tickLabels: { fontSize: 10 } }}
              />
            ) : (
              <VictoryAxis
                standalone={false}
                crossAxis
                theme={VictoryTheme.material}
                fixLabelOverlap={true}
                style={{ tickLabels: { fontSize: 10 } }}
              />
            )}
            <VictoryAxis
              standalone={false}
              dependentAxis
              crossAxis
              theme={VictoryTheme.material}
            />
            {_.map(dataLabel, (e, i) => (
              <VictoryLine
                key={i}
                style={{
                  data: { stroke: color[i] }
                }}
                data={e.data}
              />
            ))}
          </VictoryChart>
          <svg viewBox="0 100 900 500">
            <VictoryLegend
              standalone={false}
              orientation="horizontal"
              data={data}
              colorScale={["#8e3ace", "#32aeca"]}
              rowGutter={{ top: 0, bottom: 30 }}
              style={{ labels: { fontSize: 18 } }}
              x={520}
              y={100}
            />
          </svg>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    getDataLineChart: state.getDataLineChart
  };
};
export default connect(mapStateToProps, null)(LineChart);
