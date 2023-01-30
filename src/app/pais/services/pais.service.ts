import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor( private http: HttpClient ) {}

  private apiUrl: string = 'https://restcountries.com/v3.1/'

  buscarPais( termino: string ): Observable<any> { //Aquí no he entendido nada (vid 108 min 6:30)

    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get( url );

  }

}
