import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  myProducts: Array<Product> = [];
  constructor(private service:ProductService) {

  }

  ngOnInit() {
    this.myProducts = this.service.getProducts();
  }

}
