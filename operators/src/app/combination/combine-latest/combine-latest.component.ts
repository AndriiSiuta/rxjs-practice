import {ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {combineLatest, fromEvent, map, scan, startWith} from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {
  counter = 0;

  cd = inject(ChangeDetectorRef);

  @ViewChild('increase', {static: true}) increaseButton!: ElementRef;
  @ViewChild('decrease', {static: true}) decreaseButton!: ElementRef;

  ngOnInit() {
    /**
     * combineLatest will not emit an initial value until each observable emits at least one value.
     */

    /**
     * Should use combineLatest if we emit more than 1 value from each observable.
     */
    const increase$ = fromEvent(this.increaseButton.nativeElement, 'click');
    const decrease$ = fromEvent(this.decreaseButton.nativeElement, 'click');

    // startWith very important to emit CombineLatest, so it should initial value here
    const addClick$ = combineLatest([
      increase$.pipe(
        map(() => 1),
        scan((acc, curr) => acc + curr, 0),
        startWith(0),
      ),
      decrease$.pipe(
        map(() => -1),
        scan((acc, curr) => acc + curr, 0),
        startWith(0)
      )
    ]).subscribe(([increase, decrease]) => {
      console.log('increase', increase, 'decrease', decrease)
      this.counter = increase + decrease;
      this.cd.detectChanges();
    });
  }
}
