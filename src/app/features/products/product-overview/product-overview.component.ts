import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Product } from 'src/app/common/interfaces/product';
import { CartApiService } from 'src/app/common/services/network/cart-api.service';
import { ProductApiService } from 'src/app/common/services/network/product-api.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css'],
})
export class ProductOverviewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productApiService: ProductApiService,
    private cartApiService: CartApiService
  ) {}

  ngOnInit(): void {
    this.getProductById();
  }

  id?: string;
  product?: Product;

  getProductById() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.productApiService
        .getProductById(id)
        .subscribe((result) => (this.product = result));
    }
  }

  addToCart() {
    if (this.product) {
      this.cartApiService.addToCart(this.product);
    }
  }
}
