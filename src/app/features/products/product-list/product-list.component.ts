import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/interfaces/product';
import { ProductApiService } from 'src/app/common/services/network/product-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productApiService: ProductApiService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  products: Product[] = [];

  getProducts(): void {
    this.productApiService
      .getProducts()
      .subscribe((result) => (this.products = result));
  }
}
