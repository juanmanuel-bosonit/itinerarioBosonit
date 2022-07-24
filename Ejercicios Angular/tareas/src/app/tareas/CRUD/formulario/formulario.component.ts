import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [`
    .field-checkbox {
      margin-top: 20px;
    }
  `]
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
