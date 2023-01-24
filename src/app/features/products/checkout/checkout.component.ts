import { Component, OnInit } from '@angular/core';
import { CartApiService } from 'src/app/common/services/network/cart-api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(private cartApiService: CartApiService) {}

  orderTotal?: number;
  shipping: number = 200;
  tax: number = 80;

  ngOnInit(): void {
    this.getCartTotal();
  }

  getCartTotal(): number {
    return this.cartApiService.getCartTotal();
  }
}
