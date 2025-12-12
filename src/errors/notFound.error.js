const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class NotFound extends BaseError {
  constructor(message) {
    super("Not Found", StatusCodes.NOT_FOUND, message);
  }
}

module.exports = NotFound;
