import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent {

  constructor (
      private activatedRoute: ActivatedRoute,
      private PaisService: PaisService

  ) {}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.PaisService.getPaisPorAlpha( id ) )
      )
      .subscribe( resp => {
        console.log( resp );
      } )

    /* this.activatedRoute.params
      .subscribe( ({ id }) => {

        console.log( id )

        this.PaisService.getPaisPorAlpha( id )
        .subscribe( pais => {

          console.log( pais );

      }) */

  }


}
