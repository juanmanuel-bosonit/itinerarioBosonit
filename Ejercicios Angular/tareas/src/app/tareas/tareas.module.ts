import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Módulo de las rutas hijas.
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
    TareasRoutingModule,
    PrimeNgModule,
    CommunicationComponentModule
  ]
})
export class TareasModule { }
