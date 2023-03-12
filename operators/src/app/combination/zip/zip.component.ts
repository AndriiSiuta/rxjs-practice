import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {delay, of, zip} from 'rxjs';

@Component({
  selector: 'rx-zip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {
  ngOnInit() {
    // After all observables emit, emit values as an array
    const source$ = of(1, 2, 3, 4, 5);
    const source2$ = of('a', 'b', 'c', 'd');
    const example$ = zip(source$.pipe(delay(1000)), source2$.ipipe(delay(2000)));

    example$.subscribe(console.log);

  // *  const age$ = of(27, 25, 29);
  // * const name$ = of('Foo', 'Bar', 'Beer');
  // * const isDev$ = of(true, true, false);
  // *
  // * zip(age$, name$, isDev$).pipe(
  //   *   map(([age, name, isDev]) => ({ age, name, isDev }))
  //   * )
  // * .subscribe(x => console.log(x));
  // *
   // Outputs
  // { age: 27, name: 'Foo', isDev: true }
  // { age: 25, name: 'Bar', isDev: true }
  // { age: 29, name: 'Beer', isDev: false }
  }
}
