import { PRODS } from './prods-mock';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

 prods=PRODS;

  loadAll():any{
      return this.prods;
  }
}
