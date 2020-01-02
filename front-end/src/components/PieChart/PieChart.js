import React from "react";
import axios from "axios";
import { VictoryPie, VictoryLegend } from "victory";
import "./StylePie.css";

export default class PieChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
      name:"",
      percent:""
    }
  }
  async componentDidMount() {
    let url = "http://localhost:8080/device_summary";
    let headers = {
      token: localStorage.getItem("token")
    };
    try {
      const data = await axios.get(url, { headers });
      if(data.request.status === 200){
        this.setState({
        data: data.data,
        name: data.data[0].name,
        percent: data.data[1].percent
      },
        )
      }
            
    } catch (error) {
      console.log(error);
    }
    console.log(this.state.data, this.state.name, this.state.percent)
  }
  
  render() {
    return (
      <div className="pie-pie">
        <div className="pie-chart">
          <VictoryPie
            style={{ labels: { fill: "none" } }}
            innerRadius={100}
            colorScale={["#32aeca", "#8e3ace"]}
            data={this.state.data}
            x = "name"
            y = "percent"
          />
        </div>
        <div className="pie-legend">
          <VictoryLegend
            width={100}
            data={[
              { name: "IOS", symbol: { fill: "#32aeca", type: "square" } },
              { name: "Android", symbol: { fill: "#8e3ace" } }
            ]}
          />
        </div>
      </div>
    );
  }
}

// const PieChart = () => {
//   async function getData(){
//     let url = "http://localhost:8080/device_summary";
//     let headers = {
//       token: localStorage.getItem("token")
//     };
//     try{
//       const data = await axios.get(url,{headers})
//       console.log(data);
//     }catch(error){
//       console.log(error)
//     }
//   };
//   console.log(getData());
//   // let url = "http://localhost:8080/device_summary";
//   // let headers = {
//   //   token: localStorage.getItem("token")
//   // };
//   // axios
//   //   .get(url, { headers })
//   //   .then(res => {
//   //       setData(res.data);
//   //   })
//   //   .catch(error => {
//   //     console.log(error);
//   //   });
//   return (
//     <div className="pie-pie">
//       <div className="pie-chart">
//         <VictoryPie
//           style={{ labels: { fill: "none" } }}
//           innerRadius={100}
//           colorScale={["#32aeca", "#8e3ace"]}
//           data={[
//             { x: "IOS", y: 80 },
//             { x: "Android", y: 20 }
//           ]}
//         />
//       </div>
//       <div className="pie-legend">
//         <VictoryLegend
//           width={100}
//           data={[
//             { name: "IOS", symbol: { fill: "#32aeca", type: "square" } },
//             { name: "Android", symbol: { fill: "#8e3ace" } }
//           ]}
//         />
//       </div>
//     </div>
//   );

// };
// export default PieChart;
