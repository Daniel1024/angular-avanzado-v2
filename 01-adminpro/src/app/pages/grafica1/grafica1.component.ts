import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component implements OnInit {
  labels1: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data1: MultiDataSet = [
    [350, 450, 100]
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
