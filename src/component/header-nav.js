import icon from "../assets/icon.png";

class headerNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class = "header-nav">
      <div class = "header-inside">
          <p>weathercheck</p>
      </div>
    </div>`;
  }
}

customElements.define("header-nav", headerNav);
