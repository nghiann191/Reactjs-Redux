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
=======
app.get("/device_by_hour" ,(req,res) => {
  const getData = () => {
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
  setTimeout(getData,1000)
})
>>>>>>> dd81d8d2... ve duoc heatmap
