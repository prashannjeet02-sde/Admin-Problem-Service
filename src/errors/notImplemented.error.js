const BaseError = require("./base.error");

const { StatusCodes } = require("http-status-codes");

class NotImplemented extends BaseError {
  constructor(description) {
    super("Not Implemented", StatusCodes.NOT_IMPLEMENTED);
    this.description = description;
  }
}

module.exports = NotImplemented;
