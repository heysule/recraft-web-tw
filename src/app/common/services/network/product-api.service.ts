import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../interfaces/product';
import { Observable, map, of } from 'rxjs';

import { PRODUCTS } from 'src/app/mock-products';
const BASE_URL = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private httpService: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    return products;
  }

  getProductById(id: string): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products) => products.find((product) => product.id === id))
    );
  }
}
