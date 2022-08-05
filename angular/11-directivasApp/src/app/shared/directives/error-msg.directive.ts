import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Campo Obligatorio';

  htmlElement: ElementRef<HTMLElement>;

  // Sólo se ejecuta si cambia el color
  @Input() set color(valor: string) {

    // this.htmlElement.nativeElement.style.color = valor;
    this._color = valor; 
    this.setColor();

  }

  // @Input() mensaje: string = 'Campo Obligatorio';
  // Sólo se ejecuta si cambia le mensaje
  @Input() set mensaje( valor: string ) {

    // this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
    this.setMensaje();

  }

  @Input() set valido( valor: boolean ) {

    if( valor ) {
      this.htmlElement.nativeElement.classList.remove('hidden');
    } else {
      this.htmlElement.nativeElement.classList.add('hidden');
    }

  }

  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    // if( changes['mensaje'] ){
    //   const mensaje = changes['mensaje'].currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }

    // if( changes['color'] ){
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }

  }

  ngOnInit(): void {

    // console.log(this.color)  // undefined
    // console.log(this.mensaje)  // undefined

    this.setColor();
    this.setMensaje();
    this.setEstilo();

  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerHTML = this._mensaje;
  }

}
