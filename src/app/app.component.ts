import { Component } from '@angular/core';
import { QuoteTypes } from './enums/quote-types';
import { AmbitoFinancieroQuoteData, USDDataInterface } from './interfaces/data-types';
import { QuotesService } from './services/quotes/quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tablero-cotizaciones';
  USDquote: USDDataInterface[] = [];

  constructor(private quotesService: QuotesService){}

  ngOnInit(){
    this.getData();
  }

  getData(){
    setInterval(() => {
      this.quotesService.getAllUSD();
      this.quotesService.getAllETH();
      this.quotesService.getAllDAI();
    }, 5000);
  }
}
