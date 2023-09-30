class LoadingCircle extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
         <style>
           .loading-container {
             position: fixed;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             background: #131214;
             display: flex;
             justify-content: center;
             align-items: center;
             z-index: 999; 
           }
   
           .loading-circle {
             border: 4px solid #dddae5; 
             border-top: 4px solid #f3f3f3; 
             border-radius: 50%;
             width: 50px;
             height: 50px;
             animation: spin 2s linear infinite; 
           }
   
           @keyframes spin {
             0% { transform: rotate(0deg); }
             100% { transform: rotate(360deg); }
           }
         </style>
         <div class="loading-container">
           <div class="loading-circle"></div>
         </div>
       `;
  }
}

customElements.define("loading-circle", LoadingCircle);
