import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {endWith, of} from 'rxjs';

@Component({
  selector: 'rx-end-with',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './end-with.component.html',
  styleUrls: ['./end-with.component.scss']
})
export class EndWithComponent implements OnInit {
  ngOnInit(): void {
    const stream1$ = of('Hello', 'World');

    // Emit the given value at the end of the source observable
    stream1$.pipe(endWith('!')).subscribe(console.log);
    // Hello World!
  }

}
