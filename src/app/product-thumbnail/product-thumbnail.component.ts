import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../shared/models/product';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product: Product;
  constructor() { }


  ngOnInit() {
  }
  selected(name: string) {
    alert(name);
  }


}
