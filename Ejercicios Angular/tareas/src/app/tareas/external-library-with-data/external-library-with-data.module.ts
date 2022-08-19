import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

import { NgChartsModule } from 'ng2-charts';

import { BarrasComponent } from './barras/barras.component';
import { LineaComponent } from './linea/linea.component';



@NgModule({
  declarations: [
    BarrasComponent,
    LineaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PrimeNgModule,
    NgChartsModule
  ],
  exports: [
    BarrasComponent,
    LineaComponent
  ]
})
export class ExternalLibraryWithDataModule { }
