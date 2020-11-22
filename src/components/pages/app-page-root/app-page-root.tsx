import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-page-root',
  styleUrl: 'app-page-root.scss',
  shadow: true,
})
export class AppPageRoot {
  render() {
    return (
      <div>
      <app-header></app-header>
        <main>
        <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-page-home" exact={true} />
              <stencil-route url="/project" component="app-page-project" />
              <stencil-route url="/about-me" component="app-page-about-me" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}