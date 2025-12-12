class BaseError extends Error {
  constructor(name, statusCode, description) {
    super(description);
    this.name = name;
    this.statusCode = statusCode;
    this.message = description;

    Error.captureStackTrace(this);
  }
}

module.exports = BaseError;
