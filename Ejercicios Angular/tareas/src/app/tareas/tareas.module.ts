import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Módulo de las rutas hijas.
import { CrudModule } from './CRUD/crud.module';
import { TareasRoutingModule } from './tareas-routing.module';

// Componentes de las tareas.
import { CommunicationComponentComponent } from './communication-component/communication-component.component';
import { CounterComponent } from './counter/counter.component';
import { CRUDComponent } from './CRUD/crud.component';
import { DisplayHideComponent } from './display-hide/display-hide.component';
import { ExternalLibraryWithDataComponent } from './external-library-with-data/external-library-with-data.component';
import { LightSwitchComponent } from './light-switch/light-switch.component';
import { SearchOnTypeComponent } from './search-on-type/search-on-type.component';

// PrimeNG Módulo
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CommunicationComponentModule } from './communication-component/communication-component.module';
import { SearchOnTypeModule } from './search-on-type/search-on-type.module';



@NgModule({
  declarations: [
    DisplayHideComponent,
    CommunicationComponentComponent,
    CRUDComponent,
    SearchOnTypeComponent,
    LightSwitchComponent,
    ExternalLibraryWithDataComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TareasRoutingModule,
    PrimeNgModule,
    CommunicationComponentModule,
    CrudModule,
    SearchOnTypeModule
  ]
})
export class TareasModule { }
