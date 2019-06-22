import { Component, Input } from '@angular/core';

@Component({
  selector: 'basket',
  template: `<h1>Basket {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class BasketComponent  {
  @Input() name: string;
}
