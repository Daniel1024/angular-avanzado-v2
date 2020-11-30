import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {
  @Input()
  progress = 0;

  set value(val: number) {
    this.progress = val;
    this.valorSalida.emit(val);
  }

  @Output()
  valorSalida = new EventEmitter<number>();

  cambiarValor(valor: number): void {
    if (valor >= 0 && this.progress >= 100) {
      this.value = 100;
    } else if (valor <= 0 && this.progress <= 0) {
      this.value = 0;
    } else {
      this.value = this.progress + valor;
    }
  }

}
