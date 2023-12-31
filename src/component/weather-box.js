import imageClear from '../public/images/clear.png';
import imageClouds from '../public/images/cloud.png';
import imageHaze from '../public/images/haze.png';
import imageRain from '../public/images/rain.png';
import imageSnow from '../public/images/snow.png';

class WeatherBox extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setWeatherIcon();
  }

  setWeatherData(data) {
    this.weatherData = data;
    this.render();
    this.setWeatherIcon();
  }

  setWeatherIcon() {
    if (this.weatherData) {
      const weatherIcon = this.querySelector('.row .details-image img');
      const weatherDescription = this.weatherData.weather[0].main;

      if (weatherIcon) {
        if (weatherDescription === 'Clear') {
          weatherIcon.setAttribute('src', imageClear);
        } else if (weatherDescription === 'Clouds') {
          weatherIcon.setAttribute('src', imageClouds);
        } else if (weatherDescription === 'Haze') {
          weatherIcon.setAttribute('src', imageHaze);
        } else if (weatherDescription === 'Rain') {
          weatherIcon.setAttribute('src', imageRain);
        } else if (weatherDescription === 'Snow') {
          weatherIcon.setAttribute('src', imageSnow);
        } else if (weatherDescription === 'Mist') {
          weatherIcon.setAttribute('src', imageHaze);
        }
      }
    }
  }

  static capitalizeWeatherDescription(description) {
    return description
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  render() {
    if (this.weatherData) {
      const cityName = this.weatherData.name;
      const cityCountry = this.weatherData.sys.country;
      const temperature = this.weatherData.main.temp.toFixed(0);
      const weatherDescription = this.weatherData.weather[0].main;
      // eslint-disable-next-line max-len
      const capitalizedWeatherDescription = WeatherBox.capitalizeWeatherDescription(weatherDescription);

      const currentDate = new Date();
      const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
      const date = currentDate.toLocaleDateString('en-US', { day: 'numeric' });
      const month = currentDate.toLocaleDateString('en-US', { month: 'short' });

      this.innerHTML = `
      <div class="weather-box">
          <p id="des">Now</p>
          <div class="row">
            <p id="temp"><span>${temperature}°c</span></p>
              <div class = "details-image">
                <img src="" alt = "weather-icon" class="lazyload"/>
              </div>
          </div>
          <div class = cols>
            <p id="weather-desc">${capitalizedWeatherDescription}</p>
            <hr>
            <p id="date">
                  <svg xmlns="http://www.w3.org/2000/svg" height="0.9em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#dddae5}</style><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/>
                  </svg>
                  ${day} ${date}, ${month}
            </p>
            <p id="loc"> 
                  <svg xmlns="http://www.w3.org/2000/svg" height="0.9em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#dddae5}</style><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                  </svg>
                  ${cityName}, ${cityCountry}
            </p>
          </div>
      </div>
      `;
    } else {
      this.innerHTML = '';
    }
  }
}

customElements.define('weather-box', WeatherBox);
