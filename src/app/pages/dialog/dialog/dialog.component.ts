import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {BasicDialogComponent} from "../basic-dialog/basic-dialog.component";
import {FormControl} from "@angular/forms";
import {DialogWithDataComponent} from "../dialog-with-data/dialog-with-data.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  nombre = new FormControl<string>('');
  resultado: string = '';

  constructor(private dialog: MatDialog) {
  }

  openBasicDialog() {
  //Abrir el dialog que yo necesite basado en un modal especifico creado como componente
    this.dialog.open(BasicDialogComponent,{
     // width: '500px',
      //height: '600px',
      maxWidth: '600px',
      //enterAnimationDuration: 2000, //ms
      //exitAnimationDuration: 2000,
      position: {top: '100px'},
      disableClose: true,
      hasBackdrop: true,
      backdropClass: 'fondo'
    });
  }

  openDialogWithData() {
    //Para enviar datos nos tenemos que guardar la referencia del dialog que vamos a abrir en una variable
    const dialoref = this.dialog.open(DialogWithDataComponent,{
      data: this.nombre.value,
      disableClose: true
    });

    //Nos quedamos a la escucha del cierre del dialog
    //Es un metodo asincrono
    dialoref.afterClosed().subscribe( dataDeVuelta => {
      console.log('soy asincrono');
      this.resultado = this.nombre.value + ': ' + dataDeVuelta;
      //OJO  que en este caso estoy forzando que siempre me devuelva un string
      // Pero si el disableClose esta false, al cerrarse devulve null
    });
    console.log('No soy asincrono');
  }
}
