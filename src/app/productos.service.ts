import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<any>("https://api.mercadolibre.com/sites/MLA/search?q=ipod");
  }
}
