import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})


export class ListadoComponent{
  heroes: string[] = ['spiderman', 'batman', 'ironman', 'hulk', 'goku'];
  // es string y undifened
  heroeborrado: string|undefined = '';
  
 
  borrarheroe(){

    // borro los elementos uno por uno el primer elemento con shift
    //si esto es undefined entonces (o) usare or que esto regrese un string vacio
    this.heroeborrado = this.heroes.shift() || '';
    

    // borro todos los eleentos de mi arreglo 
    // this.heroes = [];

  }

}
