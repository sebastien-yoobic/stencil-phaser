import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() first: string;
  @Prop() last: string;

  // static getPhaser(): Promise<any> {
  //   return import('phaser').then(p2 => {
  //     console.log(p2);
  //   });
  // }

  getB(): Promise<any> {
    return import('../../lib/b').then(b => console.log('b imported', b));
  }
  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
