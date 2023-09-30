class WindDetails extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  setWindDetails(data) {
    this.windDetails = data;
    this.render();
  }

  render() {
    if (this.windDetails) {
      const windSpeed = this.windDetails.wind.speed;
      const windDeg = this.windDetails.wind.deg;

      this.innerHTML = `
    <div class="wind-details">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#dddae5}</style><path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/></svg>
      <div class = desc>
        <div class = desc-speed>
          <p>Speed</p>
          <p><span>${windSpeed}</span><span id = "unit">km/h</span></p>
        </div>
        <div class = desc-deg>
          <p>Deg</p>
          <p><span>${windDeg}°</span></p>
        </div>
      </div>
    
    </div>   
     `;
    } else {
      this.innerHTML = "";
    }
  }
}

customElements.define("wind-details", WindDetails);
