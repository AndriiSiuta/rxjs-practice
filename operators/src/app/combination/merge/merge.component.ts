import {Component, OnInit} from '@angular/core';
import {delay, merge, of} from 'rxjs';

@Component({
  selector: 'rx-merge',
  standalone: true,
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {
  ngOnInit(): void {
    const stream1$ = of([1, 2, 3, 4, 5]).pipe(delay(500));
    const stream2$ = of(['a', 'b', 'c', 'd']).pipe(delay(500));

    const example$ = merge(stream1$, stream2$);
    example$.subscribe(console.log);
  }
}
