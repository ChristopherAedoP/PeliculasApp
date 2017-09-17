import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {
  pelicula: any;
  regresarA = '';
  txtbuscar = '';

  constructor(public _ps: PeliculasService, public _ar: ActivatedRoute) {
    this._ar.params.subscribe(parametros => {
      console.log(parametros);

      this.regresarA = parametros['pag'];

      if (parametros['textbuscar']) {
        this.txtbuscar = parametros['textbuscar'];
      }

      this._ps.getPelicula(parametros['id']).subscribe(pelicula => {
        this.pelicula = pelicula;
      });
    });
  }

  ngOnInit() {}
}
