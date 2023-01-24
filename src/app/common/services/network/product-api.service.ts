import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../interfaces/product';
import { Observable, of } from 'rxjs';

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

  getProductById(id: string): Observable<Product> {
    return this.httpService.get<Product>(`${BASE_URL}/${id}`);
  }
}
