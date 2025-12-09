const BaseError = require("../errors/base.error");

const { StatusCodes } = require("http-status-codes");

function errorHandler(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      name: err.name,
      description: err.description,
      details: err.details,
      data: {},
    });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    name: "Internal Server Error",
    description: "Something Went wrong",
    data: {},
  });
}

module.exports = errorHandler;
