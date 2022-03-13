export default customElements.define(
  "custom-button-extend",
  class extends HTMLButtonElement {
    constructor() {
      super();
      this.style = `
        font-family: auto;
        font-size: 1.2rem;
        color: #000000;
        padding: 1px 6px;
        border-width: 2px;
        border: 1px solid rgb(118, 118, 118);
        background-color: rgb(239, 239, 239);
      `;
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
    }

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(attr, oldValue, newValue) {
      this.log("attributeChanged", attr, newValue);
    }
  },
  { extends: "button" }
);
