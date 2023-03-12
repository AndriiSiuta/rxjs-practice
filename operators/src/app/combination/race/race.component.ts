import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rx-race',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {
  ngOnInit() {
    // The observable to emit first is used.
    // work with low latency request from the server
    // [request1, request2] -> [low-latency, high-latency] -> low-latency
  }
}
