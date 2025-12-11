const { ProblemModel } = require("../models/index");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await ProblemModel.create({
        title: problemData.title,
        description: problemData.description,
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
