import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

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

  constructor(private empService: EmployeesService) {}

  onSubmit() {
    this.empService.addEmployee(this.employee).subscribe();
  }
}
