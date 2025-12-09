const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends BaseError {
  constructor(propertName) {
    super(
      "Bad Request",
      StatusCodes.BAD_REQUEST,
      `Invalid Request for${propertName}`
    );
  }
}

module.exports = BadRequest;
