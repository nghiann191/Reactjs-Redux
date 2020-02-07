const express = require("express");
const cors = require("cors");
const _ = require('lodash');
const moment = require('moment');
const app = express();
app.use(cors());

let dataPieChart = [
  { name: "IOS", number: _.random(0,1000), isHide: true },
  { name: "Android", number: _.random(0,1000), isHide: true  },
  { name: "Windows", number: _.random(0,1000), isHide: true },
  { name: "Os X", number: _.random(0,1000), isHide: true },
  { name: "Linux", number: _.random(0,1000), isHide: true },
  { name: "Unknown", number: _.random(0,1000), isHide: true }
];
const dataLineChartA = [];
for(let i=0; i<30; i++){
  dataLineChartA.push({
    x: moment().add(i, 'days').format('LLLL'),
    y: _.random(50, 100)
  })
}
const dataLineChartI = [];
for(let i=0; i<30; i++){
  dataLineChartI.push({
    x: moment().add(i, 'days').format('LLLL'),
    y: _.random(50, 100)
  })
}
const server = app.listen(8080, () => {
  console.log(`Express running -> PORT ${server.address().port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/device_summary/", (req, res) => {
  const getDataPieChart = () => {
    res.send(dataPieChart);
  };
  setTimeout(getDataPieChart, 1000);
});

app.get("/ranking/", (req, res) => {
  const getDataBarChart = () => {
    res.send([
      { day: "Day 5", number: Math.floor(Math.random() * 100) },
      { day: "Day 2", number: Math.floor(Math.random() * 100) },
      { day: "Day 3", number: Math.floor(Math.random() * 100) },
      { day: "Day 4", number: Math.floor(Math.random() * 100) },
      { day: "Day 1", number: Math.floor(Math.random() * 100) },
      { day: "Day 6", number: Math.floor(Math.random() * 100) },
      { day: "Day 7", number: Math.floor(Math.random() * 100) }
    ]);
  };
  setTimeout(getDataBarChart, 15000);
});

app.get("/device_by_hour/", (req, res) => {
  const getDataHeatChart = () => {
    res.send(
      _.map(
        [
          "sunday",
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday"
        ],
        day => ({
          name: day,
          data: _.map(_.range(0, 24), time => ({
            x: `${time}:00`,
            y: _.random(0, 2) !== 2 ? _.random(0, 30) : _.random(0, 50)
          }))
        })
      )
    );
  };
  setTimeout(getDataHeatChart, 5000);
});

app.get("/device_summary_choose_device/", (req, res) => {
  const deviceChoose = req.query.data;
  if(deviceChoose !== undefined){
    const listDevice = req.query.data.isHide;
    const dataChooseDevice = _.map(dataPieChart, (e, index) => ({...e, isHide: listDevice[index] === 'true'}));
    setTimeout(() => {
      res.send(dataChooseDevice);
    }, 10000);
  }
  else{
    setTimeout(() => {
      res.send(dataPieChart);
    }, 10000);
  }
});

app.get("/device_line/", (req, res) => {
  const dataLineChart = [
    {name: 'Android', data: dataLineChartA},
    {name: 'IOS', data: dataLineChartI}
  ];
  setTimeout(() =>{
    res.send(dataLineChart);
  }, 700)
})