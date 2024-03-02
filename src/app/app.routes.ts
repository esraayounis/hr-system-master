import { Routes } from '@angular/router';
import { EmployeeComponent } from './core/components/employess/employee/employee.component';
import { EmployeeProfileComponent } from './core/components/employess/employee-profile/employee-profile.component';
import { EmployeesManagementComponent } from './core/components/employess/employees-management/employees-management.component';
import { DocumentsComponent } from './core/components/documents/documents/documents.component';
import { OrdersComponent } from './core/components/orders/orders/orders.component';
import { PanelComponent } from './core/components/info-panel/panel/panel.component';
import { ReportsComponent } from './core/components/reports/reports/reports.component';
import { SalariesComponent } from './core/components/salaries/salaries/salaries.component';
import { TimeManagementComponent } from './core/components/time-management/time-management/time-management.component';

export const routes: Routes = [
    { path: '', redirectTo: '/employees-managenment', pathMatch: 'full' },
    // {path: 'employee', component: EmployeeComponent, data: { title: 'employee' }},
    {
      path: 'employees-managenment',
      component: EmployeesManagementComponent,
      data: { breadcrumb: 'employees-managenment' }, // hardcoded string
      children: [
        {
          path: 'employee',
          component: EmployeeComponent,
          data: { breadcrumb: 'employee' },
          children: [
            {
              path:'employee-profile',
              component: EmployeeProfileComponent,
              data: { breadcrumb: '' },

            }
          ]
        },
      ],
    },
    { path: 'documents', component: DocumentsComponent, data: { breadcrumb: 'documents' } },
    { path: 'orders', component: OrdersComponent, data: { breadcrumb: 'orders' } },
    { path: 'info-panel', component: PanelComponent, data: { breadcrumb: 'info-panel' } },
    { path: 'reports', component: ReportsComponent, data: { breadcrumb: 'reports' } },
    { path: 'salaries', component: SalariesComponent, data: { breadcrumb: 'salaries' } },
    { path: 'time-management', component: TimeManagementComponent, data: { breadcrumb: 'time-management' } }
  ];