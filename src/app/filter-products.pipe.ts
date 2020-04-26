import { Pipe, PipeTransform } from '@angular/core';
import {ProductService} from './product.service';
import { Product } from './interfaces/product.object';
@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  constructor(private productService: ProductService){}

  transform(products:Product[], filter:string): Product[] {


    let numValue = parseInt(filter); 
    let filteredProducts: Product[]; 

    switch(numValue) {
      case 0:
          filteredProducts = this.productService.products.filter((product) => {
            return (0 < parseFloat(product.price) && parseFloat(product.price) < 50); 
          });
        break;
      case 1:
          filteredProducts = this.productService.products.filter((product) => {
            return (50 < parseFloat(product.price) && parseFloat(product.price) <= 100); 
          });
        break;
      case 2:
          filteredProducts = this.productService.products.filter((product) => {
            return (100 < parseFloat(product.price) && parseFloat(product.price) <= 150); 
          });
        break;
      case 3:
          filteredProducts = this.productService.products.filter((product) => {
            return 200 < parseFloat(product.price); 
          });
        break;
      default: 
          filteredProducts = this.productService.products; 
   
    }    
    this.productService.filteredProducts = filteredProducts; 
    return filteredProducts;

  }

}
