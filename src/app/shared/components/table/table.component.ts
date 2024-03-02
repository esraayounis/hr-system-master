import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeComponent } from '../../../core/components/employess/employee/employee.component';

export interface employeesInfo {
  index: number;
  name: string;
  jobNumber: number;
  job: string;
  country: string;
  city: string;
  departement: string;
}

const employeesInfoList: employeesInfo[] = [
  {index: 1, name: 'عبدالهادي مختار', jobNumber: 80283375, job: 'مدير التسويق', country: 'المملكة السعودية', city: 'الرياض', departement: 'الادارة' },
  {index: 2, name: ' محمد طه', jobNumber: 80293475, job: 'مدير التسويق', country: 'المملكة السعودية', city: 'الرياض', departement: 'الادارة' },
  {index: 3, name: ' عبدالرحمن علي', jobNumber: 80083375, job: 'مدير التسويق', country: 'المملكة السعودية', city: 'الرياض', departement: 'الادارة' },
  {index: 4, name: ' فاروق زياد', jobNumber: 86283375, job: 'مدير التسويق', country: 'المملكة السعودية', city: 'الرياض', departement: 'التطوير' },
  {index: 5, name: 'احمد اسامه', jobNumber: 89983375, job: 'مسؤل مبيعات', country: 'جمهورية السودان', city: 'القريات', departement: 'الجودة' },
  {index: 6, name: 'عبدالهادي مختار', jobNumber: 80283375, job: 'مدير التسويق', country: 'المملكة السعودية', city: 'الرياض', departement: 'الادارة' },
  {index: 7, name: ' محمد طه', jobNumber: 80293475, job: 'مدير التسويق', country: 'المملكة السعودية', city: 'الرياض', departement: 'الادارة' },
  {index: 8, name: ' عبدالرحمن علي', jobNumber: 80083375, job: 'مدير التسويق', country: 'المملكة السعودية', city: 'الرياض', departement: 'الادارة' },
  {index: 9, name: ' فاروق زياد', jobNumber: 86283375, job: 'مدير التسويق', country: 'المملكة السعودية', city: 'الرياض', departement: 'التطوير' },
  {index: 10, name: 'احمد اسامه', jobNumber: 89983375, job: 'مسؤل مبيعات', country: 'جمهورية السودان', city: 'القريات', departement: 'الجودة' }

];

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, EmployeeComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  displayedEmployeeColumns: string[] = ['index', 'name', 'jobNumber', 'job', 'country', 'city', 'departement'];
  employeesDataSource = employeesInfoList;
  clickedRows = new Set<employeesInfo>();

  constructor(private router: Router){}

  goEmployeeDetails(){
    this.router.navigate(['/employees-managenment/employee']);
  }


  // @ViewChild('paginator') paginator!: MatPaginator;
  // dataSource!: MatTableDataSource<employeesInfo> ;

  // ngAfterViewInit() {
  //   this.dataSource = new MatTableDataSource(employeesDataSource);
  //   this.dataSource.paginator = this.paginator;
  // }
}
