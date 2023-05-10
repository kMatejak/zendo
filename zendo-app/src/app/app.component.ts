import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  quote = 'zendo';

  // quote: Quote

  constructor(
  ) {}

  ngOnInit(): void {
  }
}