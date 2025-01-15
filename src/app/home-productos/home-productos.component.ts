import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service'; 
import { Producto } from '../producto.model';

@Component({
  selector: 'app-home-productos',
  standalone: true,
  imports: [],
  templateUrl: './home-productos.component.html',
  styleUrl: './home-productos.component.css'

})
export class HomeProductosComponent implements OnInit {
  productos: Producto[] | undefined;
   constructor(private productoService: ProductoService) { } 
   ngOnInit(): void { 
    this.productos = this.productoService.obtenerProductos().slice(0, 4);
  }
}