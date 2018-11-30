import { Component, Element, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Element() element: HTMLElement;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  changeColor(): void {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    console.log(`Changing color to ${color}`);
    this.element.style.setProperty('--theme-color', color);
  }

  render() {
    return (
      <div>
        <div class="hello">Hello, World! I'm {this.getText()}</div>
        <button id="test" onClick={() => this.changeColor()}>Change Color</button>
      </div>
    );
  }
}
