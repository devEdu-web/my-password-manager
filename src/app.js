const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes");
const Service = require("../models/services");
const Accounts = require("../models/accounts");
const pageNotFound = require('../controllers/404')

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../", "public")));
app.set("views", path.join(__dirname, "../", "views"));

app.use("/", routes);
app.use("/", pageNotFound.pageNotFound)
Service.hasMany(Accounts);

module.exports = app;
