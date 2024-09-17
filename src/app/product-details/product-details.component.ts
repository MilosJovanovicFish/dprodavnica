import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Product } from '../models/product.model';
import { ProductService } from '../services/products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;



  constructor(private route: ActivatedRoute, private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = this.productService.getProducts().find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    if (product.quantity <= 0) {
      window.alert('This product is currently unvailable!');
    } else {
      this.cartService.addToCart(product);
      window.alert('This product has been added to the cart!');
    }
  }

}
