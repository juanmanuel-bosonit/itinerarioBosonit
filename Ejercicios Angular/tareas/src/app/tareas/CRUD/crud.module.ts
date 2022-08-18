import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

import { FormularioComponent } from './formulario/formulario.component';
import { TablaComponent } from './tabla/tabla.component';



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
