export class Articulos{

  private _id?: number;
  private _nombre: string;
  private _categorias: string[];
  private _stock: number;
  private _precio: number;
  private _enVenta: boolean;

  constructor(nombre: string, categorias: string[], stock: number, precio: number, enVenta: boolean) {
    this._nombre = nombre;
    this._categorias = categorias;
    this._stock = stock;
    this._precio = precio;
    this._enVenta = enVenta;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get categorias(): string[] {
    return this._categorias;
  }

  set categorias(value: string[]) {
    this._categorias = value;
  }

  get stock(): number {
    return this._stock;
  }

  set stock(value: number) {
    this._stock = value;
  }

  get precio(): number {
    return this._precio;
  }

  set precio(value: number) {
    this._precio = value;
  }

  get enVenta(): boolean {
    return this._enVenta;
  }

  set enVenta(value: boolean) {
    this._enVenta = value;
  }

}
