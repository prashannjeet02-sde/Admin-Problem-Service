const NotImplemented = require("../errors/notImplemented.error");

function checkPath(req, res) {
  return res.json({ message: "Checking request path" });
}

function addProblems(req, res, next) {
  try {
    throw new NotImplemented("add Problems not implemented");
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res, next) {}

function getProblem(req, res, next) {}

function updateProblem(req, res, next) {}

function deleteProblem(req, res, next) {}

module.exports = {
  addProblems,
  getProblem,
  getProblems,
  updateProblem,
  deleteProblem,
  checkPath,
};
