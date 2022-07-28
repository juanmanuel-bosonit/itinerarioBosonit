import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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
    PrimeNgModule,
    ReactiveFormsModule
  ],
  exports: [
    FormularioComponent,
    TablaComponent
  ]
})
export class CrudModule { }
