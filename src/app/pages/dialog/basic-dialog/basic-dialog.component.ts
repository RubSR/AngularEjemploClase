import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-basic-dialog',
  templateUrl: './basic-dialog.component.html',
  styleUrls: ['./basic-dialog.component.scss']
})
export class BasicDialogComponent {
  //Para decirle a angular que es un dialog
  // y que el restp de componentes pueda abrirlo necesitamos
  // especificar un dialogRef ( referencia )
  constructor(public dialogRef: MatDialogRef<BasicDialogComponent>) {
  }

}
