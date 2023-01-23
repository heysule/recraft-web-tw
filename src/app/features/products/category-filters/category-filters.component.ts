import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/interfaces/product';
import { ProductApiService } from 'src/app/common/services/network/product-api.service';

@Component({
  selector: 'app-category-filters',
  templateUrl: './category-filters.component.html',
  styleUrls: ['./category-filters.component.css'],
})
export class CategoryFiltersComponent implements OnInit {
  constructor(private productApiService: ProductApiService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  products: Product[] = [];

  getProducts() {
    this.productApiService
      .getProducts()
      .subscribe((result) => (this.products = result));
  }
}
