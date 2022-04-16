let tmpl = document.createElement("template");
tmpl.innerHTML = `
  <style>
    :defined {
    }
    :host {
      font-size: 1.2rem;
      color: #000000;
      padding: 1px 6px;
      border-width: 2px;
      border: 1px solid rgb(118, 118, 118);
      background-color: rgb(239, 239, 239);
      user-select: none;
    }
  </style>
  <slot name="icon"></slot>
  <slot></slot>
`;

export default customElements.define(
  "custom-button",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.setAttribute("role", this.getAttribute("role") || "button");
    }

    connectedCallback() {
      const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.addedNodes.length) {
            console.info(mutation.addedNodes);
          }
        });
      });

      observer.observe(this, { childList: true });
      this.render();
    }

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(attr, oldValue, newValue) {
      this.log("attributeChanged", attr, newValue);
      this.render();
    }

    render() {
      this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
  }
);
