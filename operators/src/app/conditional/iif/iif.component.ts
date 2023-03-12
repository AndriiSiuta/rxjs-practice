import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {iif, mergeMap, of} from 'rxjs';

@Component({
  selector: 'rx-iif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iif.component.html',
  styleUrls: ['./iif.component.scss']
})
export class IifComponent implements OnInit {
  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5);
    const T$ = of('less than 10');
    const F$ = of('greater than 10');
    source$.pipe(
      mergeMap((v) => iif(
        () => v < 10,
        T$,
        F$
      ))
    ).subscribe(console.log);
  }
}
