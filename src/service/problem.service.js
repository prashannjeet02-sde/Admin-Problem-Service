const { IncomingDataSanitizer } = require("../utils/index");

class ProblemService {
  // why accepting constructor here?It is because if there is other repo which is saving data to sql then we can inject it here.so it is becoming dynamic
  constructor(repository) {
    this.repository = repository;
  }

  async createProblem(problemData) {
    try {
      /** 1st sanitize incoming data for description */
      problemData.description = IncomingDataSanitizer(problemData.description);

      const sanitizedProblem = await this.repository.createProblem(problemData);

      return sanitizedProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async fetchAllProblems() {
    try {
      const problems = await this.repository.getAllProblems();

      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async fetchProblem(id) {
    try {
      const problem = await this.repository.getProblem(id);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async removeProblem(id) {
    try {
      const removeProblem = await this.repository.deleteProblem(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemService;
