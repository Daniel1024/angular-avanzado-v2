import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {
  @Input()
  progress = 0;

  @Input()
  set btnClass(name: string) {
    this.className = (name > '') ? `btn btn-${ name }` : 'btn btn-primary';
  }

  @Output()
  progressChange = new EventEmitter<number>();

  className = 'btn btn-primary';

  set value(val: number) {
    this.progress = val;
    this.progressChange.emit(val);
  }

  cambiarValor(valor: number): void {
    if (valor >= 0 && this.progress >= 100) {
      this.value = 100;
    } else if (valor <= 0 && this.progress <= 0) {
      this.value = 0;
    } else {
      this.value = this.progress + valor;
    }
  }

  onChange(nuevoValor: number): void {
    debugger;
    if (nuevoValor > 100) {
      nuevoValor = 100;
    } else if (nuevoValor < 0) {
      nuevoValor = 0;
    }

    this.value = nuevoValor;
  }


}
