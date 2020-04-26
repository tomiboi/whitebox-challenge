import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from './interfaces/product.object'

@Component({
  selector: 'product-list',
  templateUrl: './product.component.html', 
  styleUrls: ['../styles/util.css', '../styles/main.css', '../fonts/themify/themify-icons.css', '../fonts/font-awesome-4.7.0/css/font-awesome.min.css',
              '../fonts/elegant-font/html-css/style.css', '../fonts/Linearicons-Free-v1.0.0/icon-font.min.css', '../styles/bootstrap.css']
})
export class ProductComponent implements OnInit {



  constructor(private productService: ProductService, private httpClient: HttpClient) { }

  public products: Product[];
  priceRanges = {
    '$0.00 - $50.00': 0,
    '$50.00 - $100.00': 1,
    '$100.00 - $150.00': 2, 
    '$200+': 3, 
};  


sorts = {
  'Price: low to high': "low",
  'Price: high to low': "high",

};

sortBy = ""; 
filterBy = ""; 


  ngOnInit(): void {

    // this.productService.getProducts().subscribe((response) => {
    //   debugger; 
    // }, (response) => {
    //   debugger; 
    //   // this.error = response.error.data.error.message;
    // });
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', '*');
    // headers = headers.append('Authorization', 'Bearer ' + token);

     this.productService.getProducts().subscribe(res => {
      this.productService.products = res.data; 
      this.productService.filteredProducts = res.data; 
      this.products = this.productService.filteredProducts;

    });
  }

  updatePriceRange(value:string){
    this.filterBy = value;
  }

  updateSorting(value:string){
    this.sortBy = value; 
  }

  searchChanged(search:string){

    this.productService.filteredProducts = this.productService.filteredProducts.filter(product => {
      return (product.name.includes(search)  || product.about.includes(search)); 
    }); 
    this.products = this.productService.filteredProducts.slice();

    // this.products = this.productService.filteredProducts; 
    debugger; 


  }

  public trackItem (index: number, product: Product) {
    return product.id;
  }

}
