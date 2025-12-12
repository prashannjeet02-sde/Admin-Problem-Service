const { ProblemModel } = require("../models/index");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const newProblem = await ProblemModel.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? testCases : [],
      });

      return newProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // Method to get problem
  async getAllProblems() {
    try {
      const fetchProblems = await ProblemModel.find({});

      return fetchProblems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
