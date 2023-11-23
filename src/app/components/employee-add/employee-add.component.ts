import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent {
  employee: Employee = {
    name: '',
    email: '',
    phone: '',
    department: '',
  };

  onSubmit() {
    console.log(this.employee);
  }
}
