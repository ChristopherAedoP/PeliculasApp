import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PeliculasService } from './../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {
  public buscar: string;
  constructor(public _ps: PeliculasService, public _ar: ActivatedRoute) {

    this._ar.params.subscribe(parametros => {
      console.log(parametros);
      if (parametros['textbuscar']) {
        this.buscar = parametros['textbuscar'];
        this.buscarPelicula();
      }


    });
  }

  ngOnInit() {}

  buscarPelicula() {
    if (this.buscar.length === 0) {
      return;
    }
    this._ps.buscarPeliculas(this.buscar).subscribe(data => {
      console.log(data);
    });
  }
}
