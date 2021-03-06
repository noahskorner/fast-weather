const accuWeather = require("../services/accuWeather");

const get5DayForecast = async (req, res) => {
  const { locationKey } = req.query;

  if (!locationKey) return res.sendStatus(400);

  try {
    const response = await accuWeather.get5DayForecast(locationKey);
    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

const autoComplete = async (req, res) => {
  const { q } = req.query;

  if (!q) return res.sendStatus(400);

  try {
    const response = await accuWeather.autoComplete(q);
    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

const textSearch = async (req, res) => {
  const { q } = req.query;

  if (!q) return res.sendStatus(400);

  try {
    const response = await accuWeather.textSearch(q);
    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

const geoPositionSearch = async (req, res) => {
  const { lat, lng } = req.query;

  if (!lat || !(lat >= -90 && lat <= 90) || !(lng >= -180 && lat <= 180))
    return res.sendStatus(400);

  try {
    const response = await accuWeather.geoPositionSearch(lat, lng);
    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

module.exports = { get5DayForecast, autoComplete, textSearch, geoPositionSearch };
