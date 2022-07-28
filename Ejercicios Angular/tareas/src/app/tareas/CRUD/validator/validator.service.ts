import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string = '([a-zA-Zñ]+)( ([a-zA-Zñ]+))? ([a-zA-Zñ]+)( ([a-zA-Zñ]+))?';
  public emailPattern         : string = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';

  constructor() { }

  camposIguales( campo1: string, campo2:string ) {
    
    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if( pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({ noIguales: true })
        return { noIguales: true };
      }

      return null;
    }
  }
  
}
