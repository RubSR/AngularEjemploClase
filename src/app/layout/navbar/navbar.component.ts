import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  claseActive = '';
  //OJO nose porque pero cuando creamos un componente no escribe su constructor
  //Para navegar necesitamos un modulo de angular que el Router
  constructor(private router: Router) {
  }

  navegar() {
    this.router.navigate(['articulos']);
    this.claseActive = 'active';
  }


  borrarActive() {
    this.claseActive = '';
  }
}
