import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component implements OnInit {
  labels1: Label[] = ['Pan', 'Refresco', 'Tacos'];
  data1: MultiDataSet = [
    [10, 15, 40]
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
