import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-page-home',
  styleUrl: 'app-page-home.scss',
  shadow: true,
})
export class AppPageHome {
  render() {
    return (
      <div class="app-home">
        <p>
          Güelcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
      </div>
    );
  }
}
