import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {concat, of} from 'rxjs';

@Component({
  selector: 'concat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {
  ngOnInit() {

    /**
     * concat will emit all values from the first observable and then all values from the second observable.
     */

    const source1$ = of([1,2,3,4]);
    const source2$ = of(['a', 'b', 'c', 'd']);

    // concat will emit all values from the first observable and then all values from the second observable.
    concat(source1$, source2$).subscribe(console.log);
  }
}
