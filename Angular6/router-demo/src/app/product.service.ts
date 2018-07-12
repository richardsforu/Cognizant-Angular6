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
    
    console.log('--- service: '+this.prods);
  return this.prods;
  }
}
