const NotFound = require("../errors/notFound.error");
const { ProblemModel } = require("../models/index");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const newProblem = await ProblemModel.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });

      return newProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // Method to get all problems
  async getAllProblems() {
    try {
      const fetchProblems = await ProblemModel.find({});

      return fetchProblems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /** Method to get Problem */

  async getProblem(id) {
    try {
      const problem = await ProblemModel.findById(id);
      if (!problem) {
        throw new NotFound(`${id}: id not found`, {});
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /** Method to delete problem */
  async deleteProblem(id) {
    try {
      const remove = await ProblemModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
