import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

import { Pais, Usuario } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  // Para no hardcodear una región en particular, 
  // añado el select de regiones por si la persona es de otro continente
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private _baseUrl : string = 'https://restcountries.com/v2';
  private _dataUrl : string = 'http://localhost:3000';

  get regiones(): string[] {
    return [ ...this._regiones] ;
  }

  // Variable para actualizar la tabla en tiempo real.
  private _refresh$ = new Subject<void>();

  constructor( private http: HttpClient ) { }

  get refresh$() {
    return this._refresh$;
  }

  // Método para obtener la lista de países según la región elegida
  getPaises( region: string ): Observable<Pais[]> {
    const url: string = `${ this._baseUrl }/region/${ region }?fields=name,alpha3Code`;
    return this.http.get<Pais[]>( url );
  }

  // Método para obtener los datos de los usuarios del Json Server.
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${ this._dataUrl }/data`);
  }

  // Método para insertar datos en el Json Server.
  insertarUsuario( usuario: Usuario ): Observable<Usuario> {
    return this.http.post<Usuario>( `${ this._dataUrl }/data`, usuario )
      .pipe(
        tap( ( _ ) => this.refresh$.next() )
      );
  } 

  // Método para editar los usuarios del Json Server.
  editarUsuario( usuario: Usuario ): Observable<Usuario> {
    return this.http.put<Usuario>( `${ this._dataUrl }/data/${ usuario.id }`, usuario )
    .pipe(
      tap( ( _ ) => this.refresh$.next() )
    );
  }

  // Método para borrar el usuario seleccionado del Json Server
  borrarUsuario( usuario: Usuario ): Observable<Usuario> {
    return this.http.delete<Usuario>( `${ this._dataUrl }/data/${ usuario.id }` )
    .pipe(
      tap( ( _ ) => this.refresh$.next() )
    );
  }

}
