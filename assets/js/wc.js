class MyComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  // Could also be:
  // static observedAttributes = ['message'];
  static get observedAttributes() {
    return ["message"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const message = this.attributes.message.value || "Hello world";
    this.innerHTML = `<h1>${message}</h1>`;
  }
}

customElements.define("my-component", MyComponent);
