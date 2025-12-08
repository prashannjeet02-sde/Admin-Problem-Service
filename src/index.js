const express = require("express");

const { PORT } = require("./config/server.config");

const app = express();

// middlewares
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.text());

// Server
app.listen(PORT, () => {
  console.log(`Server listening to Port:${PORT}`);
});
