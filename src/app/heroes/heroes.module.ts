// importamos el decorador ngmodulo de angular core 
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { heroecomponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // las declaraciones van a ser mi componentes de mis archivos 
    declarations: [
        heroecomponent,
        ListadoComponent

    ],
    // que cosas quiero que sean visibles afuera de este modulo 
    // los exports significa que cosa quiero ser publicas que se vea fuera de ete modulo 
    exports: [
        ListadoComponent
    ],
    // aqui adentro solo van modulos 
    imports: [
        // mee importa directivas commo ngif o ngfor 
        CommonModule
       
    ]

})

export class heroesmodule {}