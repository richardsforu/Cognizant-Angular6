import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  constructor() { }

  @Output()
  out=new EventEmitter();
  
  setMessage(){
    this.out.emit('Good Afternoon');
  }
  

  ngOnInit() {
  }

}
