import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {of, startWith} from 'rxjs';

@Component({
  selector: 'rx-start-with',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss']
})
export class StartWithComponent implements OnInit {
  ngOnInit() {
    const source$ = of('World');
    const example$ = source$.pipe(startWith('Hello'));
    example$.subscribe(console.log);
  }
}
