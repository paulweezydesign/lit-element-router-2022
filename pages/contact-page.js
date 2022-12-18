import { LitElement, html } from 'lit';

export class ContactPage extends LitElement {
  render() {
    return html`
      <h1 class='text-7xl font-black'>Contact us</h1>
    `;
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define('contact-page', ContactPage);
