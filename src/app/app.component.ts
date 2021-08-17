import { Component } from '@angular/core';

// decorador typescript
@Component({
  // el nombre de este componente que aparece en mi html como etiqueta
  selector: 'app-root',
  // especificamos el archivo donde se encuentra el html 
  templateUrl: 'app.component.html'

  // insertarr directamente a mi html 
  // template: `
  //   <h1>holaa de nuevo</h1>
  
  // `
})
export class AppComponent {
  
  // unaa forma de hacerlo 
  // sumar(){
  //   // necesito hacer referencia a la propiedad de la clase 
  //   this.numero +=1;
  // }

  // restar(){
  //   this.numero -=1;
  // }
}
