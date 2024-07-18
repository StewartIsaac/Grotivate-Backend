// Import libraries
const express = require('express'); 
const bodyParser = require('body-parser');
const request = require('request');
let ejs = require('ejs');

const app = express();

// Load environment variables from .env
require('dotenv').config();
const port = process.env.PORT || 3000;
const apiKey = process.env.WEATHER_API_KEY;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse incoming form data (urlencoded format)
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as view engine 
app.set('view engine', 'ejs');

// Route for the homepage (/)
app.get('/', function (req, res) {
  res.render('index', { weather: null, error: null });
});

// Route to handle POST requests to the homepage (/)
app.post('/', function (req, res) {
  const city = req.body.city;

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  // Make an HTTP GET request to the weather API
  request(url, function (err, response, body) {
    if (err) {
      // Handle errors during the API request
      console.error('Error:', err);
      response.render('index', { weather: null, error: 'Error, please try again' });
    } else {
      // Parse the JSON response from the API
      let weatherData;
      try {
        weatherData = JSON.parse(body);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        response.render('index', { weather: null, error: 'Error, please try again' });
        return;
      }

      // Check if the API response indicates an error
      if (!weatherData.main) {
        response.render('index', { weather: null, error: 'Error, please try again' });
      } else {
        // Extract temperature and city name from the response
        const temperature = weatherData.main.temp;
        const cityName = weatherData.name;

        // Format the weather message
        const weatherText = `It's ${temperature} degrees in ${cityName}!`;

        // Render the index.ejs template with weather data
        response.render('index', { weather: weatherText, error: null });
      }
    }
  });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});
