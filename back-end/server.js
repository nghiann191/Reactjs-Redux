const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const server = app.listen(8080, () => {
  console.log(`Express running -> PORT ${server.address().port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/device_summary", (req, res) => {
  const num = Math.floor(Math.random() * 10000);
  const getData = () => {
    res.send([
      { name: "IOS", number: num },
      { name: "Android", number: 10000 - num }
    ]);
  };
  setTimeout(getData, 10000);
});

app.get("/ranking", (req, res) => {
  const getData = () => {
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
  setTimeout(getData, 1000);
});

