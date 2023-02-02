import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persolanizada'
})
export class PersolanizadaPipe implements PipeTransform {

  //Value-> valor de entrada
  //args->opcione para el pipe
  //Salida
  //Que calcula el exponente de un numero
  //value->numero
  //args-> exponente
  //return->resultado
  transform(value: number, exponente: number = 1): number {
    return Math.pow(value, exponente);
  }

}
