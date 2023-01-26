import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-dialog-with-data',
  templateUrl: './dialog-with-data.component.html',
  styleUrls: ['./dialog-with-data.component.scss']
})
export class DialogWithDataComponent {


  regalo = new FormControl<string>('');
  constructor( public dialogRef: MatDialogRef<DialogWithDataComponent>,
               //Para recibir datos lo hago a partir del decorador INJECT
               @Inject(MAT_DIALOG_DATA) public nombre: string
               ) {
  }

  onNoClick() {
    //Hacer la logica que querais antes cerrar
    this.dialogRef.close('Prefiere suspender');
  }
}
