import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  progress1 = 15;
  progress2 = 35;

  getPercent(val: number): string {
    return `${val}%`;
  }

  cambioValorHijo1(val: number): void {
    this.progress1 = val;
  }

  cambioValorHijo2(val: number): void {
    this.progress2 = val;
  }
}
