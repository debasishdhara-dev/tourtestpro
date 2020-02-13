const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.set(bodyparser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    const data = {
        msg: "Hello User"
    }
    res.status(200).send(data);
});

app.listen(port, (req, res) => {
    console.log("http://localhost:" + port);
});