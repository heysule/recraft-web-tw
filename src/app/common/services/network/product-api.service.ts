import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../interfaces/product';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private httpService: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpService.get<Product[]>(BASE_URL);
  }
}
