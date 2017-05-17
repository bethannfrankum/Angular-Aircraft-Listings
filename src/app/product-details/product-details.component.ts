import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Params} from '@angular/router';

import {Product} from '../shared/models/product';
import {ProductService} from '../shared/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:Product;

  constructor(private route: ActivatedRoute, private service: ProductService) { }

  ngOnInit() {
    this.route.params.forEach(( params: Params) =>{
      if (params['id'] !== undefined){
        let id = params['id'];
        this.product = this.service.getProductById(id);
      }
    });
  }
showLogs:boolean = false;

loadLogs(){
    this.showLogs = true;
}

}
