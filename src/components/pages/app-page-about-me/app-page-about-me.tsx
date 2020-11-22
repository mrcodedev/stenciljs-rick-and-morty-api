import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-page-about-me',
  styleUrl: 'app-page-about-me.scss'
})
export class AppPageAboutMe {
  
  render() {
    return (
      <p>My name is About-me</p>
    );
  }
}