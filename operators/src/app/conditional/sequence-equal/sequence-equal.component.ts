import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {from, of, sequenceEqual, switchMap} from 'rxjs';

@Component({
  selector: 'rx-sequence-equal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sequence-equal.component.html',
  styleUrls: ['./sequence-equal.component.scss']
})

export class SequenceEqualComponent implements OnInit {
  ngOnInit(): void {
    const expectedSequence = from([1, 4, 5]);

    const source$ = of([1, 4, 5], [5, 4, 1], [1, 4, 5]);
    source$.pipe(
      switchMap((v) => from(v).pipe(
        sequenceEqual(expectedSequence)
      ))).subscribe(console.log);
  }
}
