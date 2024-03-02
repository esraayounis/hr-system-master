import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RouterModule } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableComponent } from '../../../../shared/components/table/table.component';

@Component({
  selector: 'app-employees-management',
  standalone: true,
  imports: [RouterModule ,EmployeeComponent, TableComponent],
  templateUrl: './employees-management.component.html',
  styleUrl: './employees-management.component.css'
})



export class EmployeesManagementComponent implements OnInit{ 
  loading1:boolean = false;
  loading2:boolean = false;
  addIcon = false;
  importIcon =false;
  submitted = false;
  filterEmployeesForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.filterEmployeesForm = this.formBuilder.group(
      {
        // fullname: ['', Validators.required],
  
      });

  }

  addEmployee(){
    this.loading2 = true;
  }



  importFile(){
    this.loading1 = true;
  }

  showFilterForm = {
    previous: false,
  }


  @ViewChild('pages') pages!: ElementRef;
    selectedPage = '';
    onSelectedPage():void {
      this.selectedPage = this.pages.nativeElement.value;
  }


  get f(): { [key: string]: AbstractControl } {
    return this.filterEmployeesForm.controls;
  }

  searchEmployee(){
    // this.title = this.formdata.controls['phone'].value;
  }

  filterEmployee(): void {
    this.submitted = true;

    if (this.filterEmployeesForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.filterEmployeesForm.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.filterEmployeesForm.reset();
  }
}
