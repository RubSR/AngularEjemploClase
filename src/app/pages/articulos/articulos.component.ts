import {Component, OnInit} from '@angular/core';
import {Articulos} from "../../models/Articulos";
import {FormBuilder, FormControl, FormControlState, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})


export class ArticulosComponent implements OnInit{

  articulosList : Articulos[] = [];
  categoriasList = ['Consolas', 'Portatiles','Smartphones'];
  //1. Con los campos por separado ->FormControl
  //2. FormGroup -> Array de formControl
  //FormControl -> tipado
  //Hay que pasarle como minimo un value inicial:
  // nombreForm = new FormControl<String>(
  //   'ejemplo@email.com',
  //   [Validators.required, Validators.email]
  // );

  //CREAR FORMGROUP a PARTIR DE FORMBUILDER
  formulario = this.fb.group({
    nombre: ['', Validators.required],
    categoria: [ [''], Validators.required],
    stock: [0, [Validators.required]],
    precio: [0,Validators.required],
    enVenta: [true, Validators.required],

  });
  posicion: number = 0;

  constructor( private fb: FormBuilder) {
  }

  ngOnInit(): void {

  }


  //Simulando que hemos llamado a una api y me ha devuelto un array de articulos


  addArticulo(): void {
    const articulo = new Articulos('Nuevo',['Nuevo'],0,500,false);
    this.articulosList.push(articulo);
  }

  removeArticulo(): void{
    this.articulosList.pop();
  }

  formData() {
      //Comprobar si el formulario es valido
    console.log(this.formulario.value.categoria);
    if(this.formulario.valid){
      let articulo: Articulos = new Articulos(
        this.formulario.value.nombre!,
        this.formulario.value.categoria!,
        this.formulario.value.stock!,
        this.formulario.value.precio!,
        this.formulario.value.enVenta!
      );

      this.articulosList.push(articulo);
      //this.formulario.reset();
      //RESET A MANO -> estableciendole los valores por defecto a mano
      //this.formulario.patchValue() ->cambiar valores a un campo o a varios

      this.formulario.setValue({
        nombre: ' ',
        categoria: [''],
        stock: 0,
        precio: 0,
        enVenta: true
      });

    }
  }

  modificar(articulo: Articulos, i: number) {
    this.posicion = i;
    //Le pasamos los valores del articulo a lo inputs formulario
    this.formulario.setValue({
      nombre: articulo.nombre,
      categoria: articulo.categorias,
      stock: articulo.stock,
      precio: articulo.precio,
      enVenta: articulo.enVenta
    });


  }

  update() {
    const articulo: Articulos = new Articulos(
      this.formulario.value.nombre!,
      this.formulario.value.categoria!,
      this.formulario.value.stock!,
      this.formulario.value.precio!,
      this.formulario.value.enVenta!
    );

    //Dentro del array de articulos cambiar el viejo por el modificado
    // en la misma posicion
    this.articulosList[this.posicion] = articulo;
  }
}
