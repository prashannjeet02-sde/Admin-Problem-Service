const express = require("express");

const v1ProblemPath = require("./v1/index");

const routes = express.Router();

routes.use("/v1", v1ProblemPath);

module.exports = routes;
