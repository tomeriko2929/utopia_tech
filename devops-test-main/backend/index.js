// index.js

const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Set your desired port

// Health check route
app.get("/healthcheck", (_req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };

  try {
    res.send(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).send();
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
