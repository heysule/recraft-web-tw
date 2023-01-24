import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/common/interfaces/cart';
import { CartApiService } from 'src/app/common/services/network/cart-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartApiService: CartApiService) {}

  ngOnInit(): void {
    this.getCart();
  }

  cart: Cart[] = [];
  shippingEstimate = 200;
  taxEstimate = 80;

  getCart() {
    this.cartApiService.getCart().subscribe((result) => (this.cart = result));
  }

  removeFromCart(item: Cart) {
    this.cartApiService.removeFromCart(item);
    this.getCart();
  }

  getCartTotal(): number {
    return this.cartApiService.getCartTotal();
  }
}
