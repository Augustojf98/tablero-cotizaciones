import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ScreenData } from 'src/app/interfaces/data-types';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnChanges {

  @Input() quoteTypes: ScreenData[];
  calculatorForm: FormGroup;

  constructor() { 
    this.calculatorForm = new FormGroup({});
    this.quoteTypes = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.quoteTypes.forEach(fe => {
      if (this.calculatorForm.get(fe.nombre) == null || this.calculatorForm.get(fe.nombre) == undefined){
        this.calculatorForm.addControl(fe.nombre, new FormControl(''));
      }
    });
  }

}
