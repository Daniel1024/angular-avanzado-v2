import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  progress = 50;

  get withPercent(): string {
    return `${this.progress}%`;
  }

  cambiarValor(valor: number): void {
    if (valor >= 0 && this.progress >= 100) {
      this.progress = 100;
    } else if (valor <= 0 && this.progress <= 0) {
      this.progress = 0;
    } else {
      this.progress = this.progress + valor;
    }
  }
}
