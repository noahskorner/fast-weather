const router = require("express").Router();
const {
  get5DayForecast,
  autoComplete,
  geoPositionSearch,
} = require("../controllers/weather.controller");

router.get("/5day", get5DayForecast);
router.get("/autocomplete", autoComplete);
router.get("/geoposition", geoPositionSearch);

module.exports = router;
