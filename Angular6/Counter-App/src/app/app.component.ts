import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  totalCounter=0;

  totalCount(count){
    console.log('---- '+count);
    this.totalCounter+=count;
  }
  

}
