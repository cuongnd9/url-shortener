require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Chao Xin"));

app.listen(port, () => console.log(`Server is listening on port ${port}`));
