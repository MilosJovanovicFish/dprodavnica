import { Injectable } from "@angular/core";
import { FinishedOrders } from "../models/finished-orders.model";
import { UserService } from "src/app/services/user.service";
import { ProductService } from "./products.service";
@Injectable({
    providedIn: 'root'
  })
  export class FinishedOrdersService {
  
    constructor(private userService: UserService, private productService: ProductService) { }
  
    private orders: FinishedOrders [] = [
      { id: 1,product:'Medaljon Staklo',material:'Staklo', price: '2000 RSD', date: new Date, userId: 1, status: 'cancelled', products: [1, 2] }, 
      { id: 2,product:'Ogrlica Aventuris',material:'Aventuris', price:'3500 RSD', date: new Date ("2024-08-28"), userId: 1, status: 'cancelled', products: [3, 4, 5] }, 
      { id: 3,product:'Ogrlica Kamen',material:'Kamen', price:'5000 RSD', date: new Date("2023-05-13"), userId: 1, status: 'done', products: [6, 7, 8, 9] }, 
      { id: 4,product:'Ogrlica Vulkanska lava',material:'Vulkanska lava', price:'2000 RSD', date: new Date("2024-05-20"), userId: 1, status: 'done', products: [13, 14, 15] },
      { id: 5,product:'Prsten Malahit',material:'Malahit', price: '3600 RSD',  date: new Date("2023-06-21"), userId: 1, status: 'cancelled', products: [5,6] },
    ];

    orders1: any[] = [];
    products = this.productService.getProducts();
    getData(){
      this.orders.forEach(element => {
        if (element.userId == this.userService.currentUser.id) {
          this.orders1.push(element);
        }
      });

      return this.orders1;
    }
}
  