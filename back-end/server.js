const express = require("express");
const cors = require("cors");
const _ = require('lodash');
const app = express();

let dataPieChart = [
  { name: "IOS", number: _.random(0,1000), isHide: true },
  { name: "Android", number: _.random(0,1000), isHide: true  },
  { name: "Windows", number: _.random(0,1000), isHide: true },
  { name: "Os X", number: _.random(0,1000), isHide: true },
  { name: "Linux", number: _.random(0,1000), isHide: true },
  { name: "Unknown", number: _.random(0,1000), isHide: true }
]
let nameDevices = _.map(dataPieChart, (e) => ({name : e.name}))
app.use(cors());
const server = app.listen(8080, () => {
  console.log(`Express running -> PORT ${server.address().port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/device_summary", (req, res) => {
  const getDataPieChart = () => {
    res.send(dataPieChart);
  };
  setTimeout(getDataPieChart, 1000);
});

app.get("/ranking", (req, res) => {
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

app.get("/device_by_hour", (req, res) => {
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

app.get("/device_summary_choose_device", (req, res) => {
  const DeviceChoose = req.query.data;
  if(DeviceChoose !== undefined){
    let listDevice = req.query.data.isHide;
    let dataChooseDevice = _.map(dataPieChart, (e, index) => ({...e, isHide: listDevice[index] === 'true'}));
    setTimeout(() => {
      res.send(dataChooseDevice);
    }, 2000);
  }
  else{
    setTimeout(() => {
      res.send(dataPieChart);
    }, 2000);
  }
})

app.get("/get_name_device", (req, res) => {
  res.send(nameDevices);
})