import {Component, OnInit} from '@angular/core';
import {combineLatestAll, map, of} from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-combine-all',
  templateUrl: './combine-all.component.html',
  styleUrls: ['./combine-all.component.scss']
})
export class CombineAllComponent implements OnInit {

  ngOnInit() {
    const stream1$ = of([1, 2, 3, 4, 5]);
    const stream2$ = of(['a', 'b', 'c', 'd']);

    const r$ = stream1$.pipe(
      map((val) => stream2$.pipe(
        map((i) => `(${val}): ${i}`)
      ))
    );

    r$
      .pipe(combineLatestAll())
      .subscribe(console.log)

    // ['Result (1,2,3,4,5): a,b,c,d']
    // Combine all element
    // Looks like work merge all elements
  }
}
