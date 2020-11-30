import { Component } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {
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
