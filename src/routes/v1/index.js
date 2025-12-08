const express = require("express");

const ProblemPath = require("./problem.routes");

const v1Routes = express.Router();

v1Routes.use("/problems", ProblemPath);

module.exports = v1Routes;
