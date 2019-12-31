const express = require('express');
const app = express();

const server = app.listen(8080, () => {
    console.log(`Express running -> PORT ${server.address().port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/device_summary', (req, res) => {
    res.send({
        "IOS": 60,
        "Android": 40
    })
})