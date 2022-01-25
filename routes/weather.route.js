const router = require("express").Router();
const {
  get5DayForecast,
  autoComplete,
  textSearch,
  geoPositionSearch,
} = require("../controllers/weather.controller");

router.get("/5day", get5DayForecast);
router.get("/autocomplete", autoComplete);
router.get("/geoposition", geoPositionSearch);
router.get("/search", textSearch);
module.exports = router;
