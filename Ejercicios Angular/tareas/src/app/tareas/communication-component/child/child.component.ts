import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
    `
      .marco {
        margin-top: 20px;
        padding: 25px;
        border: 3px solid var(--surface-d);
        border-radius: 5px;
      }

      .content {
        display: flex;
        justify-content: center;
      }

      .title {
        font-size: 40px;
      }

      .subTitle {
        font-size: 25px;
      }

      .espacioDerecha {
        margin-right: 20px;
      }

      .botones{
        display: flex;
        justify-content: center;
        margin-top: 40px;
        margin-bottom: 25px;
      }
    `
  ]
})
export class ChildComponent implements OnInit {

  // Con el decorador @Input puedo recibir datos desde otro componente
  // que comparta el mismo módulo.
  @Input() msjFromParent: string = '';
  // Con el decorador @Output puedo emitir un evento para leerlo en 
  // otro componente que comparta el mismo módulo.
  @Output() msjFromChild = new EventEmitter<string>();

  msjChild: string = '';

  private msjObservable$: Observable<string> = this.communicationService.observableChild; 

  constructor( private communicationService: CommunicationService ) { }

  ngOnInit(): void {
  }

  // Envio de datos por Output
  mandarMsjHijo() {
    this.msjChild = 'Child Using Output Property';
    this.msjFromChild.emit( this.msjChild );
  }

  // Envio de datos por Servicio
  escribirDesdeServicioChild() {
    this.msjFromChild.emit( this.communicationService.envioDatosChild());
  }

  // Usando el Observable
  msjObservableChild() {
    this.msjObservable$
      .subscribe( message => {
        this.msjFromChild.emit( message ); 
      })
  }

}
