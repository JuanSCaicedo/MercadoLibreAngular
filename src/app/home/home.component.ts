import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
