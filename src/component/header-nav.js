class headerNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class = "header-nav">
      <div>
          <p>weathercheck</p>
      </div>
    </div>`;
  }
}

customElements.define("header-nav", headerNav);
