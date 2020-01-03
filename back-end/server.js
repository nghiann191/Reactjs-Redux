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
    const num = Math.floor(Math.random() * 10000);
    res.send([
        { "name": `IOS`, "number": num },
        { "name": `Android`, "number": 10000 - num }
    ])
})