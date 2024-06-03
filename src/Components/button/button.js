import './button.css';

class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <button><slot></slot></button>
    `;
  }
}

customElements.define('my-button', MyButton);
