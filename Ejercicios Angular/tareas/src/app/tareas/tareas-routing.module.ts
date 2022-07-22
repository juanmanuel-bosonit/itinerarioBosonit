import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes-tareas
import { CommunicationComponentComponent } from './communication-component/communication-component.component';
import { CounterComponent } from './counter/counter.component';
import { CRUDComponent } from './CRUD/crud.component';
import { DisplayHideComponent } from './display-hide/display-hide.component';
import { ExternalLibraryWithDataComponent } from './external-library-with-data/external-library-with-data.component';
import { LightSwitchComponent } from './light-switch/light-switch.component';
import { SearchOnTypeComponent } from './search-on-type/search-on-type.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tarea1',
        component: DisplayHideComponent,
        pathMatch: 'full'
      },
      {
        path: 'tarea2',
        component: CommunicationComponentComponent,
      },
      {
        path: 'tarea3',
        component: CRUDComponent,
      },
      {
        path: 'tarea4',
        component: SearchOnTypeComponent,
      },
      {
        path: 'tarea5',
        component: LightSwitchComponent,
      },
      {
        path: 'tarea6',
        component: ExternalLibraryWithDataComponent,
      },
      {
        path: 'tarea7',
        component: CounterComponent,
      },
      {
        path: '**',
        redirectTo: 'tarea1'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }