import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Universidades } from '../interfaces/universidad.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url: string = 'http://universities.hipolabs.com/search?';

  constructor( private http: HttpClient ) { }

  buscar( country: string, name: string ): Observable<Universidades[]> {
    return this.http.get<Universidades[]>(`${this.url}country=${country}&name=${name}`);
  }

}
