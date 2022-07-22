import { Component } from '@angular/core';

@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide.component.html',
  styles: [
    `
      .col-12 {
        margin-top: 50px;
        display: flex;
        justify-content: center;
      }

      div {
        margin-top: 20px;
      }
    `
  ]
})
export class DisplayHideComponent {

  mostrar   : boolean = false;
  botonLabel: string = 'Mostrar';
  icon      : string = 'pi pi-search-plus';

  mostrarOcultar() {
    if( this.mostrar ) {
      this.mostrar = false;
      this.botonLabel = 'Mostrar';
      this.icon = 'pi pi-search-plus';
    } else {
      this.mostrar = true;
      this.botonLabel = 'Ocultar';
      this.icon = 'pi pi-search-minus';
    }
  }

}
