import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  prods:Product[];

  constructor(private prodService:ProductService){
    
  }

  ngOnInit() {
  this.prods=this.prodService.loadAll();
  
  }

}
