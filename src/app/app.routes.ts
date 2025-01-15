//import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductosComponent } from './home-productos/home-productos.component';
import { ProductosComponent } from './productos/productos.component';

export const routes: Routes = [
  { path: '', component: HomeProductosComponent },
  { path: 'productos', component: ProductosComponent }
];

export class AppRoutingModule { }
