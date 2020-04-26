import { Pipe, PipeTransform } from '@angular/core';
import {ProductService} from './product.service';
import { Product } from './interfaces/product.object';

@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {
  constructor(private productService: ProductService){}

  transform(products:Product[], sorter:string): Product[] {
    switch(sorter) {
      case "low":
          this.productService.filteredProducts.sort(function(a, b) {
            return parseFloat(a.price) - parseFloat(b.price);
        });
        break;
      case "high":
          this.productService.filteredProducts.sort(function(a, b) {
            return parseFloat(b.price) - parseFloat(a.price) ;
        });
        break;
     
   
    }    
    return this.productService.products;
  }

}
