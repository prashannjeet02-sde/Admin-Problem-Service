const express = require("express");

const { PORT } = require("./config/server.config");

const app = express();

// middlewares
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.text());

// Routes
const v1ProblemRoute = require("./routes/index");
const BaseError = require("./errors/base.error");
app.use("/api", v1ProblemRoute);

// Server
app.listen(PORT, () => {
  console.log(`Server listening to Port:${PORT}`);

  throw new BaseError("Bad Request", 400, "Something went wrong");
});
