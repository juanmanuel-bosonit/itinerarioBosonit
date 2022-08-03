import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'BFuYvmOTimh7bi6g5pEBXntD4vlG1diu';
  private servicioUrl: string ="https://api.giphy.com/v1/gifs"
  private _historial: string[] = [];

  //TODO: Cambiar any por su tipo
  public resultados: any[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor( private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

  }

  // async buscarGifs (query: string = '') {
  buscarGifs (query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));

    }

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params: params})
        .subscribe((resp) => {
          this.resultados = resp.data;

          localStorage.setItem('resultados', JSON.stringify(this.resultados));
        })

    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=BFuYvmOTimh7bi6g5pEBXntD4vlG1diu&q=dragon ball z&limit=10');
    // const data = await resp.json();

    // console.log(data);
  }

}
