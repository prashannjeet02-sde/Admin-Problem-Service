const express = require("express");

const { PORT } = require("./config/server.config");

const app = express();

// Server
app.listen(PORT, () => {
  console.log(`Server listening to Port:${PORT}`);
});
