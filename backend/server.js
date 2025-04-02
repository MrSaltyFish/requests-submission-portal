const cors = require("cors");
const express = require("express");

const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the MERN Portal Backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on: ${BACKEND_URL}:${PORT}`);
});
