import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }

  getUsuariosRedesSociales() {

    const baseUrl = 'http://localhost:3000';
    return this.http.get(`${ baseUrl }/grafica`);
  }

}
