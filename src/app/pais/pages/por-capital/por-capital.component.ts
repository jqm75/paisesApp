import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { PaisService } from "../../services/pais.service";
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})

@Injectable({
  providedIn: 'root'
})

export class PorCapitalComponent {

  termino : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];

  constructor( private paisService: PaisService ) {}
  
  buscar( termino: string ) {

    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarCapital( termino )
      .subscribe({
        next: paises => {
          this.paises = paises;
        },

        error: err => {
          this.hayError = true;
          console.log( err );
        }
      });
  }
  
}
