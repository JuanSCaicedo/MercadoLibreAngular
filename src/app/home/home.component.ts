import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  misProductos: any = this.getAll();

  getAll() {
    return [{
      "tittle": "Auriculares",
      "price": "1200"
    },
    {
      "tittle": "Minicomponente",
      "price": "45000"
    }]
  }

}
