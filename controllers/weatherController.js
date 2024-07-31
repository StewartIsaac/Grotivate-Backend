const axios = require('axios');

// Function to get coordinates from city name
const getCoordinates = async (city) => {
  try {
    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct`, {
      params: {
        q: city,
        limit: 1,
        appid: process.env.WEATHER_API_KEY,
      },
    });
    if (response.length === 0) {
      throw new Error('No coordinates found for the specified city');
    }
    const data = response.data[0];
    return { lat: data.lat, lon: data.lon };
  } catch (error) {
    console.error('Error fetching coordinates:', error.message);
    throw error;
  }
};

exports.getWeather = async (req, res) => {
  const { city } = req.query;
  try {
    const { lat, lon } = await getCoordinates(city);
    const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall`, {
      params: {
        lat,
        lon,
        exclude: 'minutely',
 appid: process.env.WEATHER_API_KEY,
        units: 'metric', // or 'imperial' for Fahrenheit
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ error: error.message });
  }
};