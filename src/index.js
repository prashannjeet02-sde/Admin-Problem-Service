const express = require("express");

const { PORT } = require("./config/server.config");

const app = express();

// middlewares
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.text());

// Routes
const v1ProblemRoute = require("./routes/index");
app.use("/api", v1ProblemRoute);

// Error Handler Middleware
const errorHandler = require("./utils/errorHandler.utils");
app.use(errorHandler);

// Server and DB connection

const DB = require("./config/db.config");

app.listen(PORT, async () => {
  console.log(`Server listening to Port:${PORT}`);

  await DB();
  console.log("DB connection is successful");
});
