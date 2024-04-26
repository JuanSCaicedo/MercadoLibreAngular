import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { ApiService } from '../api.service';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Agrega CommonModule aquí
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  misProductos: any = [];

  constructor(private productosService: ProductosService  ) { }

  ngOnInit(): void {
    this.productosService.getAll()
      .subscribe(data => {
        this.misProductos = data.results;
      });
  }

}
