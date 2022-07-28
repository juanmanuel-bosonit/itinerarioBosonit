import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';

import { Pais, Usuario } from '../interfaces/pais.interface';
import { PaisesService } from '../services/paises.service';
import { ValidatorService } from '../validator/validator.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [`
    .field-checkbox {
      margin-top: 20px;
    }

    .alert {
      background-color: #33b5e5;
      width: 200px;
      padding: 15px;
      border: 2px solid #0099CC;
      border-radius: 5px;
    }

    input {
      width: 100%;
    }

    .validacion {
      color: red;
    }

    select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: url(https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png) 10% / 15% no-repeat #ccc;
      display: inline-flex;
      cursor: pointer;
      max-width: 50%;
      padding: 10px;
      user-select: none;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 1rem;
      background: #17212f;
      border: 1px solid #304562;
      transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
      border-radius: 3px;
    }

    option {
      width: 15px !important;
      padding: 10px;
    }
  `]
})
export class FormularioComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    id: [''],
    nombre: ['', [ Validators.required, Validators.pattern( this.vs.nombreApellidoPattern ) ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', Validators.required],
    correo: ['', [ Validators.required, Validators.pattern( this.vs.emailPattern ) ]],
    envioDeOfertas: [''],
    region: ['', Validators.required],
    pais: ['', Validators.required],
    ciudad: ['', Validators.required]
  }, {
    validators: [ this.vs.camposIguales( 'password', 'password2' )]
  });

  regiones: string[] = [];

  paises: Pais[] = [];

  usuario: Usuario = {
    nombre: '',
    password: '',
    password2: '',
    correo: '',
    envioDeOfertas: true,
    region: '',
    pais: {
      name: '',
      alpha3Code: '',
      independent: false
    },
    ciudad: ''
  }

  actualizando: boolean = false;
  paisSelected: string = '';

  // UI
  cargando: boolean = false;

  constructor(private paisesService: PaisesService,
              private fb: FormBuilder,
              private vs: ValidatorService ) { }

  ngOnInit(): void {

    this.regiones = this.paisesService.regiones;

    // Cuando se elija la región
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( ( _ ) => {
          this.miFormulario.get('pais')?.reset('');
          this.cargando = true;
        }),
        switchMap( region => this.paisesService.getPaises( region ) )
      )
      .subscribe( paises => {
        this.cargando = false;
        this.paises = paises;
      })

  }

  // Método para hacer aparecer y desaparecer los span de errores.
  campoNoValido( campo: string ) {
    return this.miFormulario.get( campo )?.invalid
           && this.miFormulario.get( campo )?.touched;
  }

  // Método para disparar todas las validaciones y enviar datos
  submitFormulario() {

    this.miFormulario.markAllAsTouched();

    const usuario: Usuario = this.miFormulario.value;

    this.paisesService.insertarUsuario( usuario )
      .subscribe();

  }

  messageChild( usuario: Usuario ) {
    this.actualizando = true;
    this.miFormulario.patchValue(usuario);
    console.log(this.miFormulario.controls['region'].value);
    //await new Promise(f => setTimeout(f, 1000));
    //this.paisSelected = usuario.pais.name;
    //this.miFormulario.controls['pais'].setValue([usuario.pais]);
  }

}
