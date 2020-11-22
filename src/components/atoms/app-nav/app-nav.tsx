import { Component, h} from '@stencil/core';


@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.scss'
})
export class AppNav {
  // @State() open: boolean;
  // @Listen('click', { capture: true })
  // handleClick(event) {
  //   this.open = !this.open;
  //   console.log(event.target.dataset?.name);
  // }

  onClickNavigation(event: MouseEvent) {
    console.log((event.target as HTMLElement)?.dataset?.name || 'home');

  }

  navLinksTemplate() {
    return (
      <ul>
        <li><stencil-route-link url="/" activeClass="active" exact={true}>Home</stencil-route-link></li>
        <li><stencil-route-link url="/project" activeClass="active">Project</stencil-route-link></li>
        <li><stencil-route-link url="/about-me" activeClass="active">About Me</stencil-route-link></li>
      </ul>
    )
  }
  
  render() {
    return (
      <nav>
        {this.navLinksTemplate()}
      </nav>
    );
  }
}