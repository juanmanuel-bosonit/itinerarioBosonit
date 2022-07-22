import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes de las páginas
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

// Módulo de PrimeNG
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    ChildComponent,
    ParentComponent
  ]
})
export class CommunicationComponentModule { }
