import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { combineLatest, Observable, of } from 'rxjs';

import { Pais, PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _baseUrl: string = 'https://restcountries.com/v2';
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(): string[] {
    return [ ...this._regiones ];
  }

  constructor(private http: HttpClient) { }

  getPaisesPorRegion( region: string ): Observable<PaisSmall[]> {

    const url: string = `${ this._baseUrl }/region/${ region }?fields=name,alpha3Code`
    return this.http.get<PaisSmall[]>(url);

  }

  getPaisPorCodigo(codigo: string): Observable<Pais | null> {

    if ( !codigo ){
      return of ( null );
    }

    const url = `${ this._baseUrl }/alpha/${ codigo }`;
    return this.http.get<Pais>( url );
  }

  getPaisPorCodigSmall(codigo: string): Observable<PaisSmall> {

    const url = `${ this._baseUrl }/alpha/${ codigo }?fields=name,alpha3Code`;
    return this.http.get<PaisSmall>( url );

  }

  getPaisesporCodigo( borders: string[]): Observable<PaisSmall[]> {

    if ( !borders ){
      return of ( [] );
    }

    const peticiones: Observable<PaisSmall>[] = [];

    borders.forEach( codigo => {
      const peticion = this.getPaisPorCodigSmall(codigo);
      peticiones.push(peticion);
    });

    return combineLatest( peticiones );

  }

}
