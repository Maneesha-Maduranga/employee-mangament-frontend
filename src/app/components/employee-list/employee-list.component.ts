import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  message = '';

  constructor(private empService: EmployeesService) {
    if (this.employees.length == 0) {
      this.message = 'NO Employees to Show';
    }
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.empService
      .getAllEmployees()
      .subscribe((employees) => (this.employees = employees));
  }
}
