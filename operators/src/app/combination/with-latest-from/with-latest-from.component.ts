import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {of, withLatestFrom} from 'rxjs';

@Component({
  selector: 'rx-with-latest-from',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss']
})
export class WithLatestFromComponent implements OnInit {
  ngOnInit() {
    const source$ = of('Hello');
    const source2$ = of('World');
    const example$ = source$.pipe(withLatestFrom(
      source2$,
    ));

    example$.subscribe(console.log);
  }
}
