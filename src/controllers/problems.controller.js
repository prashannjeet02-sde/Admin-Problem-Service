const { ProblemService } = require("../service/index");
const { ProblemRepo } = require("../repositories/index");
const { StatusCodes } = require("http-status-codes");

const problemService = new ProblemService(new ProblemRepo());

/** Checking if controller is working or not */
function checkPath(req, res) {
  return res.json({ message: "Checking request path" });
}

/** Controller to add Problem */
async function addProblems(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "New Problem Created",
      error: {},
      data: newProblem,
    });
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
