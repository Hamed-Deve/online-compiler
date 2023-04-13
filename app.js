const path = require("path");
const express = require("express");
const hbs = require("hbs");
const creatFile = require("src/utils/main");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.set("views", __dirname);

app.get("", (req, res) => {
  res.render("index.hbs", {
    headTitle: "Weather forecast app",
  });
});

app.post("/submit-text", (req, res) => {
  const userText = req.body.code;
  creatFile(userText, (error, respons) => {
    res.send({
      error: error,
      respons: respons,
    });
  });
});

app.listen();
