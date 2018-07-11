import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter=0;
  @Input()
  btnLbl:string;
  constructor() { }

  @Output()
  out=new EventEmitter();

  btnCount(){
    this.counter+=1;
    this.out.emit(this.counter);

  }

  ngOnInit() {
  }

}
