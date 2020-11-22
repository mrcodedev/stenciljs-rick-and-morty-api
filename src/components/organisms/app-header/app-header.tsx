import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss'
})
export class AppHeader {
  render() {
    return (
      <header>
        <div class="header__left">  
          <img src="./assets/icon/rick-and-morty-logo.png" alt="Rick and Morty Logo" class="header__logo" />
          <h1>Rick & Morty API StencilJS</h1>
        </div>
        <div class="header__right">
          <app-nav></app-nav>
        </div>
      </header>
    );
  }
}