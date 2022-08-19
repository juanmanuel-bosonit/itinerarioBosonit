import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css']
})
export class LightSwitchComponent implements OnInit {

  encendido: boolean = false;

  lights: string[] = ['Rojo', 'Amarillo', 'Verde'];

  light: string = 'Rojo';
  color: string = '';


  constructor( public fb: FormBuilder ) { }

  ngOnInit(): void {
    this.changeColor();
  }

  changeColor(){
    this.color = this.light;
  }
  
  changeCheck(){
    !this.encendido;
  }

}
