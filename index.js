const express = require("express");
const path = require("path");
const cors = require("cors");

//read env file
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/documentation.html"));
});

app.use("/api/anime/v1", require("./routes"));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
