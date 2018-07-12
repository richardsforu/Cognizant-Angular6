import { Product } from './product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  
  prod:Product;
  isEdit=true;
  
  handleSubmit(){
    console.dir(this.prod);
    this.isEdit=false;
  }

  ngOnInit(){
    this.prod=new Product();
    this.prod.id=1000;
    this.prod.name='Mac Book Pro';
    this.prod.price=228000;
  }


}
