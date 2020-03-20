const express = require("express");
const path = require("path");
const compression = require("compression");
require("dotenv").config();
// const cookieParser = require("cookie-parser");

const app = express();
app.use(compression());


app.get("/ECV/test", (req, res) => {
    res.send("success");
});

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false
    })
);

app.listen(8001, () => {
    console.log("Server started at 8001 port");
});