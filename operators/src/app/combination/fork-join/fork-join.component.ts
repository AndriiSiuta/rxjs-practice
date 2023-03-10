import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {catchError, EMPTY, forkJoin, map, of} from 'rxjs';

@Component({
  selector: 'rx-fork-join',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {
  ngOnInit(): void {
    const stream1$ = of('Hello').pipe(
      map((value) => {
        throw Error('Error');
      }),
      catchError((err) => of(EMPTY))
      // if no Observable in catch error, ForkJoin will not emit any value
    );
    const stream2$ = of('World');

    // Emit the last value from each source observable
    forkJoin([stream1$, stream2$]).subscribe(console.log);
    // Hello World
  }
}

