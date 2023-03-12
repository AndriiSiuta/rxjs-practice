import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {defaultIfEmpty, empty, EMPTY, Subject} from 'rxjs';

@Component({
  selector: 'rx-default-if-empty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-if-empty.component.html',
  styleUrls: ['./default-if-empty.component.scss']
})
export class DefaultIfEmptyComponent implements OnInit {
  ngOnInit() {
    const example = EMPTY.pipe(defaultIfEmpty('Observable.empty()!'));
    example.subscribe(console.log);
  }
}
