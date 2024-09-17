import { Product } from "../models/product.model";

export class ProductService{
    static getProducts() {
      throw new Error("Method not implemented.");
    }
    public products: Product [] = [
        {
            id: 1,
            name: 'Minđuše Holovit',
            price: 2500,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Minđuše',
            material: 'Holovit',
            image: 'assets/images/1.jpg'
          },

          {
            id: 2,
            name: 'Minđuše Staklena Perla',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Minđuše',
            material: 'Staklo',
            image: 'assets/images/2.jpg'
          },

          {
            id: 3,
            name: 'Minđuše Tigrovo oko',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Minđuše',
            material: 'Tigrovo oko', 
            image: 'assets/images/3.jpg'
          },

          {
            id: 4,
            name: ' Minđuše Aventurin',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Minđuše',
            material: 'Aventurin',
            image: 'assets/images/4.jpg'
          },

          {
            id: 5,
            name: 'Minđuše Ametist',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Minđuše',
            material: 'Ametist',
            image: 'assets/images/5.jpg'
          },

          {
            id: 6,
            name: 'Ogrlica Staklo',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Staklo',
            image: 'assets/images/6.jpg'
          },

          {
            id: 7,
            name: 'Ogrlica Tirkiz',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Tirkiz',
            image: 'assets/images/7.jpg'
          },

          {
            id: 8,
            name: 'Ogrlica Plavi kvarc',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Plavi kvarc',
            image: 'assets/images/8.jpg'
          },

          {
            id: 9,
            name: 'Ogrlica Tirkiz',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Tirkiz',
            image: 'assets/images/9.jpg'
          },

          {
            id: 10,
            name: 'Ogrlica Vulkanska lava',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Vulkanska lava',
            image: 'assets/images/10.jpg'
          },

          {
            id: 11,
            name: 'Ogrlica Kamen',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Kamen',
            image: 'assets/images/11.jpg'
          },

          {
            id: 12,
            name: 'Ogrlica Pahuljasti opsidijan',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Pahuljasti psidijan',
            image: 'assets/images/12.jpg'
          },

          {
            id: 13,
            name: 'Ogrlica Sedef',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Sedef',
            image: 'assets/images/13.jpg'
          },

          {
            id: 14,
            name: 'Ogrlica Ahat',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Ahat',
            image: 'assets/images/14.jpg'
          },

          {
            id: 15,
            name: 'Ogrlica Ametist',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Ametist',
            image: 'assets/images/15.jpg'
          },

          {
            id: 16,
            name: 'Ogrlica Mačije oko ',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Mačije oko',
            image: 'assets/images/16.jpg'
          },

          {
            id: 17,
            name: 'Ogrlica Jaspis',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Jaspis',
            image: 'assets/images/17.jpg'
          },

          {
            id: 18,
            name: 'Prsten Ametist',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Prsten',
            material: 'Ametsit',
            image: 'assets/images/18.jpg'
          },

          {
            id: 19,
            name: 'Prsten Malahit',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Prsten',
            material: 'Malahit',
            image: 'assets/images/19.jpg'
          },

          {
            id: 20,
            name: 'Prsten tirkiz',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Prsten',
            material: 'Tirkiz',
            image: 'assets/images/20.jpg'
          },

          {
            id: 21,
            name: 'Prsten Holovit',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Prsten',
            material: 'Holovit',
            image: 'assets/images/21.jpg'
          },

          {
            id: 22,
            name: 'Prsten žad',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Prsten',
            material: 'Žad',
            image: 'assets/images/22.jpg'
          },

          {
            id: 23,
            name: 'Prsten žad',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Prsten',
            material: 'Žad',
            image: 'assets/images/23.jpg'
          },

          {
            id: 24,
            name: 'Prsten Tigrovo oko',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Prsten',
            material: 'Tigrovo oko',
            image: 'assets/images/24.jpg'
          },

          {
            id: 25,
            name: 'Ogrlica Mačije oko',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Mačije oko',
            image: 'assets/images/25.jpg'
          },

          {
            id: 26,
            name: 'Ogrlica Ametist',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Ametist',
            image: 'assets/images/26.jpg'
          },

          {
            id: 27,
            name: 'Ogrlica žad',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Žad',
            image: 'assets/images/27.jpg'
          },

          {
            id: 28,
            name: 'Ogrlica sedef',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Sedef',
            image: 'assets/images/28.jpg'
          },

          {
            id: 29,
            name: 'Medaljon Sedef',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Medaljon',
            material: 'Sedef',
            image: 'assets/images/29.jpg'
          },

          {
            id: 30,
            name: 'Medaljon Tirkiz',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Medaljon',
            material: 'Tirkiz',
            image: 'assets/images/30.jpg'
          },
        
          {
            id: 31,
            name: 'Medaljon Tirkiz',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Medaljon',
            material: 'Tirkiz',
            image: 'assets/images/31.jpg'
          },

          {
            id: 32,
            name: 'Medaljon Ahat',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Medaljon',
            material: 'Ahat',
            image: 'assets/images/32.jpg'
          },

          {
            id: 33,
            name: 'Narukvica + Ogrlica',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Komplet',
            material: 'Ahat, biseri',
            image: 'assets/images/37.jpg'
          },

          {
            id: 34,
            name: 'Medaljon Stklo',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Medaljon',
            material: 'Staklo',
            image: 'assets/images/34.jpg'
          },

          {
            id: 35,
            name: 'Medaljon Ahat',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Medaljon',
            material: 'Ahat',
            image: 'assets/images/35.jpg'
          },

          {
            id: 36,
            name: 'Medaljon Ćilibar',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Medaljon',
            material: 'Ćilibar',
            image: 'assets/images/36.jpg'
          },

          {
            id: 37,
            name: 'Medaljon Staklo',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Medaljon',
            material: 'Staklo',
            image: 'assets/images/37.jpg'
          },

          {
            id: 38,
            name: 'Ogrlica Aventuris',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Ogrlica',
            material: 'Aventuris',
            image: 'assets/images/37.jpg'
          },

          {
            id: 39,
            name: 'Medaljon Jaspis',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Medaljon',
            material: 'Jaspis',
            image: 'assets/images/39.jpg'
          },

          {
            id: 40,
            name: 'Medaljon Žad',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Medaljon',
            material: 'Žad',
            image: 'assets/images/40.jpg'
          },

          {
            id: 41,
            name: 'Medaljon Ahat',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Medaljon',
            material: 'Ahat',
            image: 'assets/images/41.jpg'
          },

          {
            id: 42,
            name: 'Medaljon Staklo',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Medaljon',
            material: 'Staklo',
            image: 'assets/images/42.jpg'
          },

          {
            id: 43,
            name: 'Medaljon Staklo',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Medaljon',
            material: 'Staklo',
            image: 'assets/images/43.jpg'
          },

          {
            id: 44,
            name: 'Medaljon Staklo',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Medaljon',
            material: 'Staklo',
            image: 'assets/images/44.jpg'
          },

          {
            id: 45,
            name: 'Medaljon Staklo',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'Medaljon',
            material: 'Staklo',
            image: 'assets/images/45.jpg'
          },


       
    ];
    
    getProducts(){
      return this.products;
    }
}
