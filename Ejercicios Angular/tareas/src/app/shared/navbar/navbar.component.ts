import { Component, OnInit } from '@angular/core';

// Módulo de PrimeNG
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
        li {
            cursor: pointer;
        }
    `
 ]
})
export class NavbarComponent implements OnInit {
  
  items!: MenuItem[];

  constructor() { }


    ngOnInit() {
        this.items = [
            {
                label: 'Tareas',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    { 
                        label: 'Display-Hide',
                        icon: 'pi pi-fw pi-images',
                        routerLink: 'tarea1'
                    },
                    { 
                        label: 'Component Communication', 
                        icon: 'pi pi-fw pi-comments',
                        routerLink: 'tarea2'
                    },
                    { 
                        label: 'CRUD', 
                        icon: 'pi pi-fw pi-download',
                        routerLink: 'tarea3'
                    },
                    { 
                        label: 'Search on Type', 
                        icon: 'pi pi-fw pi-search',
                        routerLink: 'tarea4' 
                    },
                    { 
                        label: 'Light Switch', 
                        icon: 'pi pi-fw pi-video',
                        routerLink: 'tarea5' 
                    },
                    { 
                        label: 'External Library with Data', 
                        icon: 'pi pi-fw pi-database',
                        routerLink: 'tarea6' 
                    },
                    { 
                        label: 'Counter', 
                        icon: 'pi pi-fw pi-cloud-download',
                        routerLink: 'tarea7' 
                    }
                ]
            }
        ];
    }

}
