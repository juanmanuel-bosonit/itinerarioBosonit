import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SWPlanetsService {

  url: string = 'https://swapi.dev/api';

  constructor( private http:HttpClient ) { }

  getAllPlanets():Observable<any>{

    return this.http.get(`${this.url}/planets`); 
    
  }

}
