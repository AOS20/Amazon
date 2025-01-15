
import { provideRouter, Routes } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeProductosComponent } from './home-productos/home-productos.component';
import { ProductosComponent } from './productos/productos.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: '', component: HomeProductosComponent }, // Ruta para la página de inicio
  { path: 'productos', component: ProductosComponent }, // Ruta para la página de "Acerca de"

];