import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
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
export class ParentComponent implements OnInit {

  msjParent    : string = '';

  msjFromChild : string = '';

  private msjObservable$: Observable<string> = this.communicationService.observableParent; 

  constructor( private communicationService: CommunicationService ) { }

  ngOnInit(): void {
  }

  // Unsando el Input
  mandarMsjParent() {
    this.msjParent = 'Parent Using Input Property';
  }

  // Usando el servicio
  messageChild( cadena: string ){
    this.msjFromChild = cadena;
  }

  escribirDesdeServicioParent() {
    this.msjParent = this.communicationService.envioDatosParent();
  }

  // Usando el Observable
  msjObservableParent() {
    this.msjObservable$
      .subscribe( message => {
        this.msjParent = message;
      })
  }

}
