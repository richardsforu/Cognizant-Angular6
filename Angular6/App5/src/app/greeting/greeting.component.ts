import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {


  @Input()
  childMsg:string;

  @Output()
  outMsg=new EventEmitter();

  greetMe(){
    this.outMsg.emit(this.childMsg);
  }



  constructor() { }

  ngOnInit() {
  }

}
