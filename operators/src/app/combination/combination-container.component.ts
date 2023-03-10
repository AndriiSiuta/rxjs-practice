import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-combination-container',
  imports: [
    RouterOutlet
  ],
  template: `
    <div class="container">
      <h1>Combination</h1>
      <router-outlet></router-outlet>
    </div>
  `
})

export class CombinationContainerComponent {
  constructor() {
    console.log('CombinationContainerComponent constructor')
  }
}
