import { NgModule } from "@angular/core";
import { contadorcomponent } from './contador/contador.component';

@NgModule({
   declarations: [
       contadorcomponent
   ],
   exports: [
       contadorcomponent
   ]
})

export class contadormodule{}