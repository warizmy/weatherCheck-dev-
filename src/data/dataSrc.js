const APIkey = 'ba153b72752607d260affc41b1c47565';

const fetchData = (url, errorMessage) => fetch(url, {
  cache: 'force-cache',
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(errorMessage);
    }
    return response.json();
  })
  .then((data) => data)
  .catch((error) => {
    throw error;
  });

const fetchWeatherData = (city) => {
  const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;
  return fetchData(APIurl, 'City not found');
};

const fetchWeatherDataByLocation = (latitude, longitude) => {
  const APIurl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIkey}`;
  return fetchData(APIurl, 'Weather data not found');
};

const fetchForecastData = (city) => {
  const APIurl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIkey}`;
  return fetchData(APIurl, 'City not found');
};

const fetchForecastByLocation = (latitude, longitude) => {
  const APIurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIkey}`;
  return fetchData(APIurl, 'Forecast data not found');
};

export {
  fetchWeatherData,
  fetchWeatherDataByLocation,
  fetchForecastData,
  fetchForecastByLocation,
};
