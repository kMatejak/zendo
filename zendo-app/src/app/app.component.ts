import { Component, OnInit } from '@angular/core';

import { Quote, QuoteData } from '../quote';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'zendo';
  public quote!: QuoteData['quote'];
  public text: string | undefined;
  public author: string | undefined;

  constructor(
    private quoteService: QuoteService,
  ) {}

  getQuote() {
    this.quoteService.getQuote().subscribe((data: Quote) => {
      this.quote = data;
    });
  }

  ngOnInit(): void {
    this.getQuote();
  }
}