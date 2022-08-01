import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';

import { PaisesService } from '../services/paises.service';

import { Usuario } from '../interfaces/pais.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [`
    .card {
      margin-top: 25px;
      margin-right: 15px;
    }

    .cabecera {
      color: #64B5F6 !important;
      font-weight: bold !important;
      text-decoration: underline;
      font-size: 20px;
    }
  `]
})
export class TablaComponent implements OnInit, OnDestroy {

  formulario: Usuario[] = [];
  subscription!: Subscription;

  @Output() usuarioModificar = new EventEmitter<Usuario>()

  constructor( private paisesService: PaisesService ) { }

  ngOnInit(): void {

    this.paisesService.getUsuarios()
      .subscribe( usuarios => {
        this.formulario = usuarios;
      });

    this.subscription = this.paisesService.refresh$
      .subscribe(() => {
      this.paisesService.getUsuarios()
      .subscribe( usuarios => {
        this.formulario = usuarios;
      });
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  usuarioAModificar( usuario: Usuario ){
    this.usuarioModificar.emit(usuario);
  }

  // Borrar registro
  eliminarUsuario( usuario: Usuario ) {
    this.paisesService.borrarUsuario(usuario)
      .subscribe();
  }

}
