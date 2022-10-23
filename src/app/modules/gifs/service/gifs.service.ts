import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Gif, ResponseSearchGiphy } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private readonly apiKey = environment.api_key;
  private readonly URL = environment.urlGiphy;

  constructor(private readonly http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string): Observable<ResponseSearchGiphy> {
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    // console.log(this._historial);
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', 10);
    return this.http
      .get<ResponseSearchGiphy>(
        `${this.URL}`,
        { params }
        // this.URL + '?api_key=' + this.apiKey + '&q=' + query + '&limit=10'
      )
      .pipe(
        map(({ data }: any) => {
          this.resultados = data;
          localStorage.setItem('resultados', JSON.stringify(this.resultados));
          return data;
        })
      );
  }
}
