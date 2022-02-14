var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/hi", (req, res) => {
    res.send("Hi World");
});

app.get("/1", (req, res) => {
    res.send("11111111111111111");
});

app.get("/2", (req, res) => {
    res.send("2222222222222222222");
});

app.post("/add", (req, res) => {
    res.send("post World");
});

app.use(express.static('contents'));



app.listen(3000);