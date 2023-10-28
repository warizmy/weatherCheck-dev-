class UseLocation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  /**
   * @param {any} e
   */
  set ClickEvent(e) {
    this.clickEvent = e;
    this.render();
  }

  get ClickEvent() {
    return this.clickEvent;
  }

  getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude } = position.coords;
          const { longitude } = position.coords;
          this.clickEvent(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
        },
      );
    } else {
      console.error('Geolocation is not available in this browser.');
    }
  }

  render() {
    this.innerHTML = `<button id="btnLocation" type="submit">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#dddae5}</style><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
    </button>`;

    const event = document.querySelector('#btnLocation');
    event.addEventListener('click', () => {
      if (typeof this.clickEvent === 'function') {
        this.getLocation();
      }
    });
  }
}

customElements.define('use-location', UseLocation);
