const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const server = app.listen(8080, () => {
    console.log(`Express running -> PORT ${server.address().port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/device_summary', (req, res) => {
    const percent = Math.floor(Math.random() * 100);
    res.send([
        { "name": `IOS`, "percent": percent, symbol: { type: "square", fill: "#32aeca" } },
        { "name": `Android`, "percent": 100 - percent, symbol: { type: "diamond", fill: "#8e3ace" } }
    ])
})