
import { FormsModule } from '@angular/forms';
import { HttpModule , JsonpModule } from '@angular/http';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PeliculasService } from './services/peliculas.service';

import { PeliculaImagenPipe } from './pipes/pelicula-Imagen.pipe';


import { App_Routes } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { GaleriaComponent } from './components/home/galeria.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BuscarComponent,
    PeliculaComponent,
    PeliculaImagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,

    App_Routes
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
