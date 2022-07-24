import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioComponent } from './formulario/formulario.component';
import { TablaComponent } from './tabla/tabla.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    FormularioComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    FormularioComponent,
    TablaComponent
  ]
})
export class CrudModule { }
