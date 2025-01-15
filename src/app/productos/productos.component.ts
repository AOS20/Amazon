import { Component, OnInit } from '@angular/core'; 
import { ProductoService } from '../producto.service'; 
import { Producto } from '../producto.model'

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit { 
  productos: Producto[] | undefined; 
  constructor(private productoService: ProductoService) { 

  } ngOnInit(): void { 
    this.productos = this.productoService.obtenerProductos();
  }
}