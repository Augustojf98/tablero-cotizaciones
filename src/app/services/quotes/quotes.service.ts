import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuoteKeys, QuoteTypes } from 'src/app/enums/quote-types';
import { AmbitoFinancieroQuoteData, BinanceData, BinanceDataInterface, BinanceQuoteData, USDDataInterface } from '../../interfaces/data-types';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';


@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  usdQuoteUrl: string;
  ethQuoteUrl: string;
  daiQuoteUrl: string;

  constructor(private http: HttpClient, private dataService: DataService) { 
    this.usdQuoteUrl = 'https://mercados.ambito.com//dolar/informal/grafico/anual';
    this.ethQuoteUrl = 'https://www.binance.com/api/v3/depth?symbol=ETHBUSD&limit=1643684403';
    this.daiQuoteUrl = 'https://www.binance.com/api/v3/depth?symbol=BUSDDAI&limit=1643684403';
  }

  getLastQuote(quoteType: number){
    if(quoteType === QuoteTypes.USD){
      this.getAllUSD();
    }
  }

  private getLast(array: Array<any>){
    return array[array.length];
  }

  getAllUSD() {
    var data : USDDataInterface[];
    this.http.get(this.usdQuoteUrl, {responseType: 'json'}).subscribe((result: any[]) => {
        data = [];
        result.shift();
        result.forEach(fe => data.push(new AmbitoFinancieroQuoteData(fe)));
        this.dataService.saveLocal(QuoteKeys.USD, data);
    });
  }

  getAllETH() {
    var data : BinanceDataInterface[];
    this.http.get(this.ethQuoteUrl, {responseType: 'json'}).subscribe((result: BinanceData) => {
        data = [];
        result.bids.forEach(fe => data.push(new BinanceQuoteData(fe)));
        this.dataService.saveLocal(QuoteKeys.ETH, data);
    });
  }

  getAllDAI() {
    var data : BinanceDataInterface[];
    this.http.get(this.daiQuoteUrl, {responseType: 'json'}).subscribe((result: BinanceData) => {
        data = [];
        result.bids.forEach(fe => data.push(new BinanceQuoteData(fe)));
        this.dataService.saveLocal(QuoteKeys.DAI, data);
    });
  }

}
