import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { PaisesService } from '../services/paises.service';

import { Usuario } from '../interfaces/pais.interface';

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
export class TablaComponent implements OnInit {

  formulario: Usuario[] = [];

  @Output() usuarioModificar = new EventEmitter<Usuario>()

  constructor( private paisesService: PaisesService ) { }

  ngOnInit(): void {

    this.paisesService.getUsuarios()
      .subscribe( usuarios => {
        this.formulario = usuarios;
      });

    this.paisesService.refresh$.subscribe(() => {
      this.paisesService.getUsuarios()
      .subscribe( usuarios => {
        this.formulario = usuarios;
      });
    });

  }

  usuarioAModificar( usuario: Usuario ){
    this.usuarioModificar.emit(usuario);
  }

  // Método para editar el usuario desde su id
  editarUsuarioPorId( usuario: Usuario ) {
    this.paisesService.editarUsuario(usuario);
  }

  // Borrar registro
  eliminarUsuario( usuario: Usuario ) {
    this.paisesService.borrarUsuario(usuario)
    .subscribe( user => console.log(user));
  }

}
