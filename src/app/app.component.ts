import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { EmployeesManagementComponent } from './core/components/employess/employees-management/employees-management.component';
import { DocumentsComponent } from './core/components/documents/documents/documents.component';
import { PanelComponent } from './core/components/info-panel/panel/panel.component';
import { OrdersComponent } from './core/components/orders/orders/orders.component';
import { ReportsComponent } from './core/components/reports/reports/reports.component';
import { SalariesComponent } from './core/components/salaries/salaries/salaries.component';
import { TimeManagementComponent } from './core/components/time-management/time-management/time-management.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BreadcrumbComponent,EmployeesManagementComponent, DocumentsComponent, PanelComponent,
  OrdersComponent, ReportsComponent, SalariesComponent, TimeManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hr-system';
  viewMode = 'employees-management';
  info_panel!: string;
  employees_management!: string;
  time_management!: string;
  salaries!: string;
  documents!: string;
  orders!: string;
  reports!: string;

  ngOnInit(): void{
    console.log(this.viewMode)
  }

}
