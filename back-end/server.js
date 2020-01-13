<<<<<<< HEAD
const express = require('express');
=======
const express = require("express");
const cors = require("cors");
const _ = require('lodash');
>>>>>>> dd81d8d2... ve duoc heatmap
const app = express();

const server = app.listen(5000, () => {
    console.log(`Express running -> PORT ${server.address().port}`);
});

<<<<<<< HEAD
app.get('/', (req, res) => {
    res.send('Hello World!');
});
<<<<<<< HEAD
=======
=======

app.get("/device_summary", (req, res) => {
  const num = Math.floor(Math.random() * 10000);
  const getDataPieChart = () => {
    res.send([
      { name: "IOS", number: num },
      { name: "Android", number: 10000 - num }
    ]);
  };
  setTimeout(getDataPieChart, 10000);
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

>>>>>>> 993e3665... chinh sua css
app.get("/device_by_hour" ,(req,res) => {
  const getDataHeatChart = () => {
    res.send(_.map(
      ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
      (day) => ({
        name: day,
        data: _.map(_.range(0, 24), time => ({
          x: `${time}:00`,
          y: _.random(0, 2) !== 2 ? _.random(0, 30) : _.random(0, 50)
        }))
      })
    ))
  }
  setTimeout(getDataHeatChart,5000)
})
>>>>>>> dd81d8d2... ve duoc heatmap
