import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {of, pairwise} from 'rxjs';

@Component({
  selector: 'rx-pairwise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pairwise.component.html',
  styleUrls: ['./pairwise.component.scss']
})
export class PairwiseComponent implements OnInit {
  ngOnInit() {
    const source$ = of(1, 2, 3, 4, 5);
    const source2$ = of('a', 'b', 'c', 'd');

    const example$ = source$.pipe(pairwise());
    const example2$ = source2$.pipe(pairwise());

    example$.subscribe(console.log);
    example2$.subscribe(console.log);
  }
}
