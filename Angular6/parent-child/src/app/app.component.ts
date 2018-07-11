import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  grerting='Good Morning';
  imgPath='https://i.ytimg.com/vi/c6L0lFEPDwk/hqdefault.jpg';
  
  status=true;
  pName='James';
  myTest=true;

  testFun(){
    console.log('---- Clicked ...')
  }

}
