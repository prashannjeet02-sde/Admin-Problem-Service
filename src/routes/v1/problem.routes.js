const express = require("express");

const { Problems } = require("../../controllers/index");

const problemRoutes = express.Router();

problemRoutes.get("/check", Problems.checkPath);

problemRoutes.get("/:id", Problems.getProblem);

problemRoutes.get("/", Problems.getProblems);

problemRoutes.post("/", Problems.addProblems);

problemRoutes.patch("/:id", Problems.updateProblem);

problemRoutes.delete("/:id", Problems.deleteProblem);

module.exports = problemRoutes;
