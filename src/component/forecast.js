class ForeCast extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  setForecastData(data) {
    this.forecastData = data;
    this.render();
  }

  render() {
    if (this.forecastData) {
      const groupForecastsByDay = () => {
        const forecastsByDay = {};
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
          0
        );
        const averageTemperature = totalTemperature / dayForecasts.length;
        const mostCommonIcon = mode(
          dayForecasts.map((forecast) => forecast.weather[0].icon)
        );
        return { weatherIcon: mostCommonIcon, averageTemperature };
      };

      const mode = (arr) =>
        arr.reduce(
          (current, item) => {
            const freq =
              (item in current.counts ? current.counts[item] : 0) + 1;
            current.counts[item] = freq;
            if (freq > current.maxCount) {
              current.mode = item;
              current.maxCount = freq;
            }
            return current;
          },
          { mode: null, maxCount: 0, counts: {} }
        ).mode;

      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); 
      currentDate.setDate(currentDate.getDate() + 1); 

      const filteredForecasts = Object.values(forecastsByDay).filter(
        (dayForecasts) => {
          const date = new Date(dayForecasts[0].dt * 1000);
          date.setHours(0, 0, 0, 0); 
          return date >= currentDate; 
        }
      );

      this.innerHTML = `
          <table>
            ${filteredForecasts
              .slice(0, 4)
              .map((dayForecasts, index) => {
                const { weatherIcon, averageTemperature } =
                  calculateDailyWeather(dayForecasts);
                const date = new Date(dayForecasts[0].dt * 1000);
                return `
                <tr class="forecast-dt-${index + 1}">
                  <td class="flex">
                    <img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png"> 
                    <p>${averageTemperature.toFixed(1)}°C</p>
                  </td>
                  <td><p id="date">${date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}</p></td>
                  <td><p id="day">${date.toLocaleDateString("en-US", {
                    weekday: "long",
                  })}</p></td>
                </tr>
              `;
              })
              .join("")}
          </table>
      `;
    } else {
      this.innerHTML = "";
    }
  }
}

customElements.define("forecast-box", ForeCast);
