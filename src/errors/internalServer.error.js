const BaseError = require("./base.error");

const { StatusCodes } = require("http-status-codes");

class InternalServerError extends BaseError {
  constructor(message, details) {
    super("Internal Server Error", StatusCodes.INTERNAL_SERVER_ERROR);
    this.message = message;
    this.details = details;
  }
}

module.exports = InternalServerError;
