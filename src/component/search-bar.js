class SearchBar extends HTMLElement {
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

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `<div id="searchContainer" class="searchContainer"> 
      <input 
        placeholder = "Enter a City"
        id="searchElement"
        type="search"      
      />
      <button id="btnSearch" type="submit">&#62;</button>
    </div>
    `;

    const event = document.querySelector("#btnSearch");
    event.addEventListener("click", this.clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
