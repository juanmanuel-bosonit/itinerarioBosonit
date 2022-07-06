import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'IronMan',
      vuela: true,
      color: Color.rojo
    },
    { 
      nombre: 'SpiderMan',
      vuela: false,
      color: Color.negro
    },
    { 
      nombre: 'Wolverine',
      vuela: false,
      color: Color.amarillo
    },
    { 
      nombre: 'Capitán América',
      vuela: false,
      color: Color.azul
    },
    { 
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde
    },
    { 
      nombre: 'Thor',
      vuela: true,
      color: Color.negro
    },
    { 
      nombre: 'Sentry',
      vuela: true,
      color: Color.amarillo
    }
  ]

  cambiar(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden( valor: string ) {
    this.ordenarPor = valor;
  }

}
