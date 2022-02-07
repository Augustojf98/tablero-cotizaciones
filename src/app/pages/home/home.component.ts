import { Component, OnInit } from '@angular/core';
import { QuoteKeys, QuoteNames } from 'src/app/enums/quote-types';
import { ScreenData } from 'src/app/interfaces/data-types';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lastUSD: ScreenData;
  lastETH: ScreenData;
  lastDAI: ScreenData;
  
  $ETH: ScreenData;
  $DAI: ScreenData;

  lastQuotes: ScreenData[];

  constructor(private dataService: DataService) { 

    this.lastQuotes = [];
    this.lastUSD = { nombre : QuoteNames.$USD, valor : 0, color: '' };
    this.lastETH = { nombre : QuoteNames.USDETH, valor : 0, color: '' };
    this.lastDAI = { nombre : QuoteNames.DAIUSD, valor : 0, color: '' };

    this.$DAI = { nombre : QuoteNames.$DAI, valor : 0, color: '' };
    this.$ETH = { nombre : QuoteNames.$ETH, valor : 0, color: '' };

  }

  ngOnInit(): void {
    this.updateData();
  }

  private updateData(){
    setInterval(() => {
      this.lastQuotes = [];
      var usdLength = this.dataService.getLocal(QuoteKeys.USD).length - 1;
      this.lastUSD.valor = this.dataService.getLocal(QuoteKeys.USD)[usdLength]?.valor;
      this.lastETH.valor = this.dataService.getLocal(QuoteKeys.ETH)[0]?.valor;
      this.lastDAI.valor = this.dataService.getLocal(QuoteKeys.DAI)[0]?.valor;

      this.$DAI.valor = this.lastUSD.valor / this.lastDAI.valor;
      this.$ETH.valor = this.lastUSD.valor * this.lastETH.valor;

      this.lastQuotes.push(this.lastDAI);
      this.lastQuotes.push(this.lastETH);
      this.lastQuotes.push(this.lastUSD);
      this.lastQuotes.push(this.$DAI);
      this.lastQuotes.push(this.$ETH);
    }, 300);
  }

}
