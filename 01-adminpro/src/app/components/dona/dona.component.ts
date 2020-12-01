import { Component, Input, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {
  @Input()
  title = 'Sin Titulo';
  @Input()
  labels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input()
  data: MultiDataSet = [
    [350, 450, 100]
  ];
  colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
