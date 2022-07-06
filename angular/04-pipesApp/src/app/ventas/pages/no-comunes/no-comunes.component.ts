import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Juanma';
  genero: string = 'masculino';
  
  nombre1: string = 'Juanma';
  genero1: string = 'masculino';

  nombre2: string = 'Cristina';
  genero2: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Mayela', 'Cristina', 'Juanma', 'Eddard', 'Evan'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(nombre: string, genero: string) {
    if(nombre == this.nombre){
      this.nombre = this.nombre2;
      this.genero = this.genero2;
    } 
    if(nombre == this.nombre2) {
      this.nombre = this.nombre1;
      this.genero = this.genero1;
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Juanma',
    edad: 38,
    direccion: 'Logroño, España'
  }

  originalOrder = () => 0;

  // Json Pipe
  heroes = [
    {
      nombre: 'IronMan',
      vuela: true
    },
    {
      nombre: 'SpiderMan',
      vuela: false
    },
    {
      nombre: 'Wolverine',
      vuela: false
    }
  ];

  // Async Pipe
  miObservable = interval(1000); // 0,1,2,3,4,5,6...

  valorPromesa = new Promise((resolve, reject)=> {
    setTimeout(()=>{
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
