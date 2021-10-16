import {
  Component, Host, h, State,
} from '@stencil/core';

@Component({
  tag: 'action-component',
  styleUrl: 'action-component.scss',
  shadow: true,
})
export class ActionComponent {
  @State() open: boolean;

  // @Listen('click', { capture: true })
  openContact() {
    this.open = true;
  }

  closeContact() {
    this.open = false;
  }

  render() {
    return (
      <Host>
        <div class="Headline">
          <div class="Headline-text">
            <h1>CtA - Main conversation</h1>
          </div>
        </div>
        <div class="Main-section">
          <div class="Action-section">
            <div class="Content-section">
              <h1>A wonderful serenity has taken possessio</h1>
              <p>
              A wonderful serenity has taken possession of my entire soul, like these sweet mo
              </p>
              <button onClick={() => this.openContact()}>
              Link button
              </button>
            </div>
          </div>
          <div class="Picture-section"></div>
        </div>
        <div class="toggle">
          {this.open
            ? <div class="Contact-Box">
              <h1>Contact us</h1>
              <button onClick={() => this.closeContact()}> X </button>
            </div>
            : null
          }
        </div>

      </Host>
    );
  }
}
