import { Component, NgModule, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Role } from '../interfaces/Role';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.scss'],
})
export class RequestAccessComponent {
  emailId: string = '';
  employeeId: string = '';
  

  constructor(private router: Router, public _dataService: DataService){

  }


  selectedRole: Role = Role.DEFAULT;
  roles = Object.values(Role);
  businessUnits = [
    { name: 'Banking, finance Services & Insurance', selected: false, clients: ['Morgan Stanley', 'Goldman Sachs', 'Natwest'] },
    { name: 'Telecom & Media', selected: false, clients: ['Airtel', 'Jio'] },
    { name: 'Healthcare', selected: false, clients: ['Apollo', 'Aster DM'] },
  ];
  selectedClients: string[] = [];
  selectedDepartments: any[] = [];
  @ViewChild('formRef') formRef!: NgForm;
  updateSelectedClients(businessUnit: any, client?: string): void {
    if (client) {
      if (businessUnit.selected) {
        this.selectedClients = Array.from(new Set([...this.selectedClients, client]));
      } else {
        this.selectedClients = this.selectedClients.filter(c => c !== client);
        this.selectedDepartments = this.selectedDepartments.filter(dep => dep.client !== client);
      }
    } else {
      businessUnit.selected = !businessUnit.selected;
    }
  }
  getDepartments(businessUnit: any, client: string): string[] {
    return [
      'Human Resources', 'Finance/Accounting', 'Marketing', 'Sales', 'Information Technology (IT)',
    ];
  }
  isSelectedDepartment(businessUnit: any, client: string, department: string): boolean {
    return this.selectedDepartments.some(dep =>
      dep.businessUnit === businessUnit && dep.client === client && dep.department === department
    );
  }
  updateSelectedDepartments(businessUnit: any, client: string, department: string): void {
    const index = this.selectedDepartments.findIndex(dep =>
      dep.businessUnit === businessUnit && dep.client === client && dep.department === department
    );
    if (index !== -1) {
      this.selectedDepartments.splice(index, 1);
    } else {
      this.selectedDepartments.push({ businessUnit, client, department });
    }
  }
  submitForm(): void {
    // console.log('Employee ID:', this.employeeId);
    // console.log('Email ID:', this.emailId);
    // console.log('Selected Role:', this.selectedRole);
    // console.log('Selected Business Units:', this.businessUnits.filter(bu => bu.selected));
    // console.log('Selected Clients:', this.selectedClients);
    // console.log('Selected Departments:', this.selectedDepartments);
    // Reset form and clear variables
    this.formRef.resetForm();
    this.employeeId = '';
    this.emailId = '';
    this.selectedRole = Role.DEFAULT;
    this.businessUnits.forEach(bu => (bu.selected = false));
    this.selectedClients = [];
    this.selectedDepartments = [];
    this._dataService.canAccessMainComponents = true;
    this.router.navigate(["/dashboard"]);
  }

}