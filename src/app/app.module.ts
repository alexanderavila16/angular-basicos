import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadormodule } from './contador/contador.module';
// importamos la clase de contador.component.ts 
import { contadorcomponent } from './contador/contador/contador.component';
import { heroesmodule } from './heroes/heroes.module';


// es un decorador de mis modulos 
@NgModule({
  declarations: [
    // son los componentes que estamos utilizando de mi ts 
    //de mi clase
    AppComponent
    
 
  ],
  imports: [
    BrowserModule,
    // importamos el modulo de heroesmodule 
    heroesmodule,
    contadormodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
