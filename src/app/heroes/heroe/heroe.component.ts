import { Component } from "@angular/core";
// import { timeStamp } from "console";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

    
})



export class heroecomponent {

    nombre: string =  'ironman';
    edad: number = 19;

    // crearme una propiedad que sra llaamada 
    get nombrecapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenernombre(): string {
// construir un template literal insertar valores mas facil
        return `${this.nombre} - ${this.edad}`;

    // seria lo mismo que 
    // return timeStamp.nombre + ' - ' + this.edad.toString();

    }

    // creo un metodo y recibire un void 
    cambiarnombre():void{
        // nombre le daremos de spiderman 
        this.nombre = 'Spiderman'; 
    }

    cambiaredad():void{
        console.log('heys');
        this.edad = 30;
    }
}