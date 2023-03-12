import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'rx-conditional-container',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './conditional-container.component.html',
  styleUrls: ['./conditional-container.component.scss']
})
export class ConditionalContainerComponent {

}
