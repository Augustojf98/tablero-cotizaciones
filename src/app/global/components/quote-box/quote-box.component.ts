import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ScreenData } from 'src/app/interfaces/data-types';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.scss']
})
export class QuoteBoxComponent implements OnInit, OnChanges {
  @Input() lastQuotes: ScreenData[];
  prevQuotes: ScreenData[];

  constructor() {
    this.lastQuotes = [];
    this.prevQuotes = [];
  }

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChanges) {

    // if(this.prevQuotes.length == 0){
    //   this.lastQuotes.forEach(fe => {
    //     this.prevQuotes.push(fe);
    //   });
    // }

    this.compareQuotes(change);
  }

  compareQuotes(change: SimpleChanges) {
    this.compare(change);
  }

  private compare(change: SimpleChanges) {

    for (var i = 0; i < this.lastQuotes.length; i++) {

      if (this.prevQuotes.length > 0) {
        if (change['lastQuotes'].currentValue[i].valor > this.prevQuotes[i].valor) {
          this.lastQuotes[i].color = 'green';
        }
        else if (change['lastQuotes'].currentValue[i].valor == this.prevQuotes[i].valor) {
          this.lastQuotes[i].color = 'yellow';
        }
        else if (change['lastQuotes'].currentValue[i].valor < this.prevQuotes[i].valor) {
          this.lastQuotes[i].color = 'red'; 
        }
      }
      else {
        this.lastQuotes[i].color = 'yellow';
      }

    }

    const quotes: ScreenData[] = [];

    this.lastQuotes.forEach(fe => {
      quotes.push({nombre: fe.nombre, valor: fe.valor, color: ''});
    });

    this.prevQuotes = quotes;

  }

}
