import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './interfaces/product.object'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public products: Product[];
  public filteredProducts: Product[];

  public getProducts() {
    return this.httpClient.get<Product[]>(`http://localhost:3000`); 
  }

  public getProduct(id: string) {
    return this.httpClient.get<Product>(`http://localhost:3000/`+id); 
  }

}
