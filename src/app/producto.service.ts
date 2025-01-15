import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [
    { id: 1, nombre: 'Producto 1', precio: 10, descripcion: 'Descripción del producto 1' },
    { id: 2, nombre: 'Producto 2', precio: 20, descripcion: 'Descripción del producto 2' },
    { id: 3, nombre: 'Producto 3', precio: 30, descripcion: 'Descripción del producto 3' },
    { id: 4, nombre: 'Producto 4', precio: 40, descripcion: 'Descripción del producto 4' }
  ];

  obtenerProductos(): Producto[] {
    return this.productos;
  }
}

