import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 'one',
      name: 'Maneesha',
      email: 'Maneesha@gmail.com',
      phone: '0763565740',
      department: 'FT',
    },
    {
      id: 'two',
      name: 'Dilkushi',
      email: 'Dilkushi@gmail.com',
      phone: '0763565740',
      department: 'FT',
    },
  ];
  message = '';

  constructor() {
    if (this.employees.length == 0) {
      this.message = 'NO Employees to Show';
    }
  }

  ngOnInit(): void {}
}
