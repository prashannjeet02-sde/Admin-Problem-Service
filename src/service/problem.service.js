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
}

module.exports = ProblemService;
