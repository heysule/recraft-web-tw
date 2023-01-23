import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/common/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor() {}

  @Input() products: Product[] = [];
}
