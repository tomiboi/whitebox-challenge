import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { Product } from '../interfaces/product.object'; 
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['../styles/util.css', '../styles/main.css', '../fonts/themify/themify-icons.css', '../fonts/font-awesome-4.7.0/css/font-awesome.min.css',
  '../fonts/elegant-font/html-css/style.css', '../fonts/Linearicons-Free-v1.0.0/icon-font.min.css', '../styles/bootstrap.css']
})
export class ProductDetailComponent implements OnInit {


  product: Product; 
  products: Product[]; 


  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id"); 

     this.productService.getProduct(id).subscribe(res => {
      this.product = res.data; 
      this.products = this.productService.products; 
    });; 
  }

}
