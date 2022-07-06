import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'juanma';
  nombreUpper: string = 'JUANMA';
  nombreCompleto: string = 'jUAN mAnUEl AgUIrrE';

  fecha: Date = new Date(); // el día de hoy.

}
