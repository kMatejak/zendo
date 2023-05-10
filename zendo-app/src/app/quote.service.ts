import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { QuoteData, Quote } from '../quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private randomQuoteUrl = 'https://zenquotes.io/?api=random';

  constructor(
    private http: HttpClient,
  ) {}

  getQuote(): Observable<Quote> {
    return this.http.get<QuoteData>(this.randomQuoteUrl).pipe(
      map((quoteData) => {
        const { quote } = quoteData;

        return {
          q: quote.q,
          a: quote.a
        };
      })
    );
  }
}