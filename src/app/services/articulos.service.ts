import { Injectable } from '@angular/core';
import {Articulos} from "../models/Articulos";

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  get posicion(): number {
    return this._posicion;
  }

  set posicion(value: number) {
    this._posicion = value;
  }


//No se destruyen con navegacion, una loz inyectamos, se quedan en memoria
  //hasta que cerramos la app->persistencia


  private _articulo : Articulos | undefined;
  private _posicion: number = 0;
  constructor() { }

  public crearArticulos(): Articulos[]{
    const articulos: Articulos[] = [];

    for (let i = 0; i<= 10; i++){
      const art = new Articulos(
        'Articulo-'+i,
        [''+i],
        i,
        20 + i,
        true
      );
      articulos.push(art);
    }
    return articulos;
  }
  get articulo(): Articulos | undefined {
    return this._articulo;
  }

  set articulo(value: Articulos | undefined) {
    this._articulo = value;
  }



}
