import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  

  constructor(private empService:EmployeeService){}
  name=this.empService.getName();

}
