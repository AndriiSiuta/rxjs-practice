import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {every, of} from 'rxjs';

@Component({
  selector: 'rx-every',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.scss']
})
export class EveryComponent implements OnInit {
  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5);
    const example$ = source$.pipe(every(x => x < 10));
    example$.subscribe(console.log);
  }
}
