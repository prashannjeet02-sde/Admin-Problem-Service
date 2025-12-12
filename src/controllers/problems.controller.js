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

/** Controller to fetch all problems */
async function getProblems(req, res, next) {
  try {
    const getProblems = await problemService.fetchAllProblems();

    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      data: getProblems,
    });
  } catch (error) {
    next(error);
  }
}

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
