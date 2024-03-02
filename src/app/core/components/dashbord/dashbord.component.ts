import { Component } from '@angular/core';
import { EmployeesManagementComponent } from '../employees-management/employees-management.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [RouterModule ,EmployeesManagementComponent],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {
  dcube = true;
}
