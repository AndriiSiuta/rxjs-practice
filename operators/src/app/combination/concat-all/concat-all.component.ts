import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {concatAll, of} from 'rxjs';

@Component({
  selector: 'concat-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concat-all.component.html',
  styleUrls: ['./concat-all.component.scss']
})
export class ConcatAllComponent implements OnInit {
  ngOnInit(): void {
    // ConcatAll is a combination of concat and mergeAll
    // Also it convert from Higher Order Observable to First Order Observable

    const stream1$ = of([1, 2, 3, 4, 5]);
    const stream2$ = of(['a', 'b', 'c', 'd']);

    const r$ = of(stream1$, stream2$);

    // Subscribes to each inner observable and emit values, when complete subscribe to next
    r$.pipe(concatAll()).subscribe(console.log)
  }

}
