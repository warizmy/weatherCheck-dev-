import imageClear from '../public/images/clear.png';
import imageClouds from '../public/images/cloud.png';
import imageHaze from '../public/images/haze.png';
import imageRain from '../public/images/rain.png';
import imageSnow from '../public/images/snow.png';

class ForeCast extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  setForecastData(data) {
    this.forecastData = data;
    this.render();
  }

  render() {
    if (this.forecastData) {
      const weatherIconToImage = {
        '01d': imageClear,
        '01n': imageClear,
        '02d': imageClouds,
        '02n': imageClouds,
        '03d': imageClouds,
        '03n': imageClouds,
        '04d': imageClouds,
        '04n': imageClouds,
        '09d': imageRain,
        '09n': imageRain,
        '10d': imageRain,
        '10n': imageRain,
        '11d': imageRain,
        '11n': imageRain,
        '13d': imageSnow,
        '13n': imageSnow,
        '50d': imageHaze,
        '50n': imageHaze,
      };

      const groupForecastsByDay = () => {
        const forecastsByDay = {};
        // eslint-disable-next-line no-restricted-syntax
        for (const forecast of this.forecastData.list) {
          const date = new Date(forecast.dt_txt);
          const dayKey = date.toDateString();
          if (!forecastsByDay[dayKey]) {
            forecastsByDay[dayKey] = [];
          }
          forecastsByDay[dayKey].push(forecast);
        }
        return forecastsByDay;
      };

      const forecastsByDay = groupForecastsByDay();

      const calculateDailyWeather = (dayForecasts) => {
        const totalTemperature = dayForecasts.reduce(
          (total, forecast) => total + forecast.main.temp,
          0,
        );
        const averageTemperature = totalTemperature / dayForecasts.length;
        // eslint-disable-next-line no-use-before-define
        const mostCommonIcon = mode(
          dayForecasts.map((forecast) => forecast.weather[0].icon),
        );
        return { weatherIcon: mostCommonIcon, averageTemperature };
      };

      const mode = (arr) => arr.reduce(
        (current, item) => {
          const freq = item in current.counts ? current.counts[item] : 0 + 1;
          current.counts[item] = freq;
          if (freq > current.maxCount) {
            current.mode = item;
            current.maxCount = freq;
          }
          return current;
        },
        { mode: null, maxCount: 0, counts: {} },
      ).mode;

      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      currentDate.setDate(currentDate.getDate() + 1);

      const filteredForecasts = Object.values(forecastsByDay).filter(
        (dayForecasts) => {
          const date = new Date(dayForecasts[0].dt * 1000);
          date.setHours(0, 0, 0, 0);
          return date >= currentDate;
        },
      );

      this.innerHTML = `
          <table>
            ${filteredForecasts
    .slice(0, 4)
    .map((dayForecasts, index) => {
      const { weatherIcon, averageTemperature } = calculateDailyWeather(dayForecasts);
      const date = new Date(dayForecasts[0].dt * 1000);
      return `
                <tr class="forecast-dt-${index + 1}">
                  <td class="flex">
                    <img src="${weatherIconToImage[weatherIcon]}" alt= "weather-icons" class="lazyload"> 
                    <p>${averageTemperature.toFixed(1)}°C</p>
                  </td>
                  <td><p id="date">${date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })}</p></td>
                  <td><p id="day">${date.toLocaleDateString('en-US', {
    weekday: 'long',
  })}</p></td>
                </tr>
              `;
    })
    .join('')}
          </table>
      `;
    } else {
      this.innerHTML = '';
    }
  }
}

customElements.define('forecast-box', ForeCast);
