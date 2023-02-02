import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent  implements OnInit{


  texto = 'Esto es un texto que vamos a formatear';
  numero = 123121234512.12313534645645;

  dineros = 52.95;

  fecha = new Date();
   constructor(private datePipe: DatePipe) {
   }
   ngOnInit() {
     const f = this.datePipe.transform(new Date(), 'full');
     console.log(f);
   }


}
