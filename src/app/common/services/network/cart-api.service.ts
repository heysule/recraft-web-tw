import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Observable, of } from 'rxjs';

import { Cart } from '../../interfaces/cart';

@Injectable({
  providedIn: 'root',
})
export class CartApiService {
  cart: Cart[] = [];

  constructor() {}

  getCart(): Observable<Cart[]> {
    return of(this.cart);
  }

  addToCart(product: Product) {
    const productInCart = this.cart.find((item) => item.id === product.id);

    if (!productInCart) {
      this.cart.push({
        id: product.id,
        title: product.displayName,
        image: product.mainImage,
        price: product.originalPrice,
        quantity: 1,
        total: product.originalPrice,
      });

      console.log(this.cart);

      return;
    }

    const newCart = this.cart.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
          total: item.total + item.price,
        };
      }

      return item;
    });

    this.cart = newCart;

    console.log(this.cart);
  }

  removeFromCart(item: Cart) {
    const newCart = this.cart.filter((cartItem) => cartItem.id !== item.id);
    this.cart = newCart;
    console.log(this.cart);
  }

  getCartCount(): number {
    return this.cart.length;
  }

  getCartTotal(): number {
    return this.cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.total,
      0
    );
  }
}
