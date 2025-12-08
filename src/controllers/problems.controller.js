function checkPath(req, res) {
  return res.json({ message: "Checking request path" });
}

function addProblems(req, res) {}

function getProblems(req, res) {}

function getProblem(req, res) {}

function updateProblem(req, res) {}

function deleteProblem(req, res) {}

module.exports = {
  addProblems,
  getProblem,
  getProblems,
  updateProblem,
  deleteProblem,
  checkPath,
};
