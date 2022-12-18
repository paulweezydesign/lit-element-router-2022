import {LitElement, html} from 'lit';

export class AboutPage extends LitElement {
  render() {
    return html`
      <h1 class='text-7xl font-black'>About Page</h1>
    `;
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define('about-page', AboutPage);