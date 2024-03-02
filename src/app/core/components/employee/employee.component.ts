import { Component } from '@angular/core';
import { EmployeeProfileComponent } from '../employee-profile/employee-profile.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [RouterModule , EmployeeProfileComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}
