import {Component, OnInit} from '@angular/core';
import {ArticulosService} from "../../services/articulos.service";
import {Articulos} from "../../models/Articulos";

@Component({
  selector: 'app-articulo-detail',
  templateUrl: './articulo-detail.component.html',
  styleUrls: ['./articulo-detail.component.scss']
})
export class ArticuloDetailComponent implements OnInit{

  articulo : Articulos | undefined;
  constructor(private articulosService: ArticulosService) {
  }
  ngOnInit() {
    //A traves del historial me traigo el state que guarda mis datos
    const state = history.state;
    this.articulo = state.articulo;
    console.log(this.articulo);
    /*//Lo recibo
    this.articulo = this.articulosService.articulo;

    //Simulo que le he cambiado el nombre desde un form
    this.articulo!.nombre = 'Nombre modificado desde otra pagina'

    //Lo seteo en el service
    this.articulosService.articulo = this.articulo;*/
  }

}
