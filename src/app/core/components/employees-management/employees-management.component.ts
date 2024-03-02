import { Component } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employees-management',
  standalone: true,
  imports: [RouterModule ,EmployeeComponent],
  templateUrl: './employees-management.component.html',
  styleUrl: './employees-management.component.css'
})
export class EmployeesManagementComponent {

}
