// importamos el componente es un decorador
import { Component } from '@angular/core';

// creamos el decorador
@Component({
  // nombre de mi etiqueta para colocarlo en mi app.component
  selector: 'app-contador',
//   mi template que apareceraa en mi app.component 
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La base es: <strong> {{ base }} </strong>
    </h3>

    <button (click)="acumular(base)">+ {{ base }}</button>

    <span> {{ numero }} </span>

    <button (click)="acumular(-base)">- {{ base }}</button>
  `
})

// creamos una clase contadorcomponent y la exportamos
// para utilizarla en oto archivo
export class contadorcomponent {
  // modifico mi titulo y lo puedo llamar en mi html
  titulo: String = 'contador app';
  // defino el tipo de propiedad numero
  numero: number = 10;

  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
