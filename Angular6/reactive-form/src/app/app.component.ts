import { Product } from './product';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  myForm:FormGroup;

  constructor(private fb:FormBuilder){}
  
  ngOnInit(){

    this.myForm=this.fb.group(
      {
        id:[],
        name:['',Validators.required],
        price:[0]
      });
}

handleForm(){
  console.log(this.myForm.valid)
  console.dir(this.myForm.value);
}



}
