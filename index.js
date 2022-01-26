const cors = require("cors");
const express = require("express");
const app = express();
require("dotenv").config();

// APP SETTINGS
app.use(
  cors({
    origin: [process.env.NODE_ENV === 'production' ? "https://fast-weather.noahgothacked.com" : "http://localhost:3000"],
  })
);
app.use(express.json());

// ROUTES
app.get("/", async (req, res) => {
  return res.sendStatus(200);
});
app.use("/api/weather", require("./routes/weather.route.js"));

// START SERVER
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
