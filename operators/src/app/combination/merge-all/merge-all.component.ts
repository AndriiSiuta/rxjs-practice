import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {fromEvent, interval, map, mergeAll, takeUntil} from 'rxjs';

@Component({
  selector: 'rx-merge-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './merge-all.component.html',
  styleUrls: ['./merge-all.component.scss']
})
export class MergeAllComponent implements OnInit {
  ngOnInit(): void {
    //   const mouseDown$ = fromEvent(document, 'mousedown');
    //   const mouseUp$ = fromEvent(document, 'mouseup');
    //   const mouseMove$ = fromEvent(document, 'mousemove');
    //
    //   const rO$ = mouseDown$.pipe(
    //     map((event: Event) => {
    //       return mouseMove$.pipe(
    //         takeUntil(mouseUp$),
    //         map((moveEvent: Event) => {
    //           return {
    //             x: (moveEvent as MouseEvent).clientX,
    //             y: (moveEvent as MouseEvent).clientY
    //           };
    //         })
    //       );
    //     })
    //   );
    //   const allMouseMoves$ = rO$.pipe(mergeAll());
    //
    //   allMouseMoves$.subscribe((moveEvent) => {
    //     console.log(moveEvent);
    //   });
    // }
    // const clicks = fromEvent(document, 'click');
    // const higherOrder = clicks.pipe(map(() => interval(1000)));
    // const firstOrder = higherOrder.pipe(mergeAll());
    //
    // firstOrder.subscribe(x => console.log(x));
  }

}
