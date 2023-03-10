/**
 * LitElement Router
 *
 * https://github.com/hamedasemi/lit-element-router
 * https://www.npmjs.com/package/lit-element-router
 */

import {} from '@webcomponents/webcomponentsjs/webcomponents-loader.js';

import { LitElement, html } from 'lit-element';
import { router } from 'lit-element-router';

import './app-link';
import './app-main';
import './pages/about-page';
import './pages/contact-page';
import './pages/kittens/index';

@router
class App extends LitElement {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      data: { type: Object },
    };
  }

  static get routes() {
    return [
      {
        name: 'home',
        pattern: '',
        data: { title: 'Home' },
      },
      {
        name: 'about',
        pattern: 'about',
      },
      {
        name: 'kittens',
        pattern: 'kittens',
      },
      {
        name: 'contact',
        pattern: 'contact',
      },
      {
        name: 'not-found',
        pattern: '*',
      },
    ];
  }

  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};
    this.data = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
    console.log(route, params, query, data);
  }

  render() {
    return html`
      <app-link href="/">Home</app-link>
      <app-link href="/about">About</app-link>
      <app-link href="/about">Contact</app-link>
      <app-link href="/user/14">user/14</app-link>

      <app-main active-route=${this.route}>
      <main class='grid grid-cols-1 place-items-center h-screen'>
        <h1 route="home">Home</h1>
      
       <about-page route="about"></about-page>
       <contact-page route='contact'></contact-page> 
       <h1 route="not-found">Not Found</h1>
      </main>
      </app-main>
    `;
  }
  createRenderRoot() {
    return this;
  }
}

customElements.define('my-app', App);
