import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  buscarPelicula(textbuscar: string) {


    if (textbuscar.length === 0) {
      return;
    }

    this._router.navigate(['buscar', textbuscar] );

  }
}
