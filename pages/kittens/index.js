import { LitElement, html } from 'lit';

export class KittensPage extends LitElement {
  render() {
    return html`
      <h1 class='text-7xl font-black'>Kitens</h1>
    `;
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define('kittens-page', KittensPage);
