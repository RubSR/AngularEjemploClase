import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ArticulosComponent} from "./pages/articulos/articulos.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";
import {DialogComponent} from "./pages/dialog/dialog/dialog.component";

//Definir los componentes que van a tener navegacion
const routes: Routes = [
  //Path hace referencia al nombre de la ruta
  // es decir al nombre que llamaremos para pintar el componente asociado

  { path: 'home', component: HomeComponent
  },

  {path: 'articulos', component: ArticulosComponent},
  {path: 'dialog', component: DialogComponent},
  //Para cargar un componente por defecto o cuando la ruta esta en blanco,
  // se usa un path vacio
  {path: '', redirectTo: '/home', pathMatch: "full"},
  //path: '**' -> Define una ruta incorrecta.- ** = cualquier string,
  // incluidos los que estoy utilizando como path
  // por lo tanto siempre al final
  {path:'**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
