import $ from 'jquery';
import {
  fetchForecastByLocation,
  fetchForecastData,
  fetchWeatherData,
  fetchWeatherDataByLocation,
} from '../data/dataSrc';
import '../component/forecast';

const main = () => {
  const searchButton = $('#btnSearch');
  const weatherBox = $('weather-box');
  const forecastBox = $('forecast-box');
  const windDetails = $('wind-details');
  const tempDetails = $('temp-details');
  const sunDetails = $('sun-details');
  const humDetails = $('hum-details');
  const pressureDetails = $('pressure-details');
  const visibilityDetails = $('visibility-details');
  const feelsLike = $('fl-details');

  const showLoading = () => {
    const loadingCircle = document.getElementById('loadingCircle');
    loadingCircle.style.display = 'block';
  };

  const hideLoading = () => {
    const loadingCircle = document.getElementById('loadingCircle');
    loadingCircle.style.display = 'none';
  };

  showLoading();

  // Update Weather for current location (After Page is done loading)
  const updateWeatherByLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude } = position.coords;
          const { longitude } = position.coords;

          showLoading();

          setTimeout(() => {
            // current weather based on location
            fetchWeatherDataByLocation(latitude, longitude)
              .then((data) => {
                weatherBox[0].setWeatherData(data);
              })
              .catch((error) => {
                console.error('Error:', error);
              });

            // wind details based on location
            fetchWeatherDataByLocation(latitude, longitude)
              .then((data) => {
                windDetails[0].setWindDetails(data);
              })
              .catch((error) => {
                console.error('Error:', error);
              });

            // 4 days forecast based on location
            fetchForecastByLocation(latitude, longitude)
              .then((data) => {
                forecastBox[0].setForecastData(data);
              })
              .catch((error) => {
                console.error('Error:', error);
              });

            // temperature details based on location
            fetchWeatherDataByLocation(latitude, longitude)
              .then((data) => {
                tempDetails[0].setTempDetails(data);
              })
              .catch((error) => {
                console.error('Error:', error);
              });

            // Sunrise and sunset details based on location
            fetchWeatherDataByLocation(latitude, longitude)
              .then((data) => {
                sunDetails[0].setSunData(data);
              })
              .catch((error) => {
                console.error('Error:', error);
              });

            // Humidity details based on location
            fetchWeatherDataByLocation(latitude, longitude)
              .then((data) => {
                humDetails[0].setHumData(data);
              })
              .catch((error) => {
                console.error('Error:', error);
              });

            // Pressure details based on location
            fetchWeatherDataByLocation(latitude, longitude)
              .then((data) => {
                pressureDetails[0].setPressureData(data);
              })
              .catch((error) => {
                console.error('Error:', error);
              });

            // Visibility details based on location
            fetchWeatherDataByLocation(latitude, longitude)
              .then((data) => {
                visibilityDetails[0].setVisibility(data);
              })
              .catch((error) => {
                console.error('Error:', error);
              });

            // Feels Like details based on location
            fetchWeatherDataByLocation(latitude, longitude)
              .then((data) => {
                feelsLike[0].setFeelsLike(data);
              })
              .catch((error) => {
                console.error('Error:', error);
              })

              .finally(() => {
                hideLoading();
              });
          }, 1000);
        },
        (error) => {
          console.error('Error getting location:', error);
        },
      );
    } else {
      console.error('Geolocation is not available in this browser.');
    }
  };

  updateWeatherByLocation();

  // On button search
  searchButton.on('click', () => {
    const city = $('#searchElement').val();

    if (city.length === 0) {
      alert('Enter a city name!');
      return;
    }

    showLoading();

    const fetchPromises = [
      fetchWeatherData(city),
      fetchWeatherData(city),
      fetchForecastData(city),
      fetchWeatherData(city),
      fetchWeatherData(city),
      fetchWeatherData(city),
      fetchWeatherData(city),
      fetchWeatherData(city),
      fetchWeatherData(city),
    ];

    Promise.all(fetchPromises)
      .then((results) => {
        const [
          weatherData,
          windData,
          forecastData,
          tempData,
          sunData,
          humData,
          pressureData,
          visibilityData,
          feelsLikeData,
        ] = results;

        weatherBox[0].setWeatherData(weatherData);
        windDetails[0].setWindDetails(windData);
        forecastBox[0].setForecastData(forecastData);
        tempDetails[0].setTempDetails(tempData);
        sunDetails[0].setSunData(sunData);
        humDetails[0].setHumData(humData);
        pressureDetails[0].setPressureData(pressureData);
        visibilityDetails[0].setVisibility(visibilityData);
        feelsLike[0].setFeelsLike(feelsLikeData);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        hideLoading();
      });
  });

  // On Button Location
  const handleLocationClick = (latitude, longitude) => {
    showLoading();

    setTimeout(() => {
      // current weather on location button
      fetchWeatherDataByLocation(latitude, longitude)
        .then((data) => {
          weatherBox[0].setWeatherData(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      // wind details on location button
      fetchWeatherDataByLocation(latitude, longitude)
        .then((data) => {
          windDetails[0].setWindDetails(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      // 4 days forecast on location button
      fetchForecastByLocation(latitude, longitude)
        .then((data) => {
          forecastBox[0].setForecastData(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      // temperature details on location button
      fetchWeatherDataByLocation(latitude, longitude)
        .then((data) => {
          tempDetails[0].setTempDetails(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      // Sunrise and sunset on location button
      fetchWeatherDataByLocation(latitude, longitude)
        .then((data) => {
          sunDetails[0].setSunData(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      // Humidity on location button
      fetchWeatherDataByLocation(latitude, longitude)
        .then((data) => {
          humDetails[0].setHumData(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      // Pressure details on location button
      fetchWeatherDataByLocation(latitude, longitude)
        .then((data) => {
          pressureDetails[0].setPressureData(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      // Visibility details on location button
      fetchWeatherDataByLocation(latitude, longitude)
        .then((data) => {
          visibilityDetails[0].setVisibility(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      // Feels Like details on location button
      fetchWeatherDataByLocation(latitude, longitude)
        .then((data) => {
          feelsLike[0].setFeelsLike(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        })

        .finally(() => {
          hideLoading();
        });
    }, 1000);
  };
  const useLocation = $('<use-location></use-location>');
  useLocation[0].ClickEvent = handleLocationClick;

  const locationContainer = $('#locationContainer');
  locationContainer.append(useLocation);
};

export default main;
