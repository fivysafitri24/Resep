class AppBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
        this.innerHTML = `<h2>Food Recipes</h2>`;
    }
  }

  customElements.define('app-bar', AppBar);