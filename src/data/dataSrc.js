const APIkey = "ba153b72752607d260affc41b1c47565"; // Change this key and Use Your API Key

// Current Weather
const fetchWeatherData = (city) => {
  const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;

  return fetch(APIurl, {
    cache: "force-cache",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

// current weather based on location
const fetchWeatherDataByLocation = (latitude, longitude) => {
  const APIurl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIkey}`;

  return fetch(APIurl, {
    cache: "force-cache",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Weather data not found");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

// Forecast
const fetchForecastData = (city) => {
  const APIurl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIkey}`;

  return fetch(APIurl, {
    cache: "force-cache",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

// Forecast for based on location
const fetchForecastByLocation = (latitude, longitude) => {
  const APIurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIkey}`;

  return fetch(APIurl, {
    cache: "force-cache",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Forecast data not found");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export {
  fetchWeatherData,
  fetchWeatherDataByLocation,
  fetchForecastData,
  fetchForecastByLocation,
};
