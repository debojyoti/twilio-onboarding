// dotenv
require("dotenv").config();

// Generate basic express app
const express = require("express");
const routes = require("./routes");
const app = express();

routes.forEach((route) => {
  app[route.method.toLowerCase()](route.path, route.callbackHandler);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
