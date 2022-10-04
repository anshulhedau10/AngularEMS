import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AddDepartmentComponent } from './add-department/add-department.component'
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateDeptComponent } from './update-dept/update-dept.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
 
@NgModule({
  declarations: [
    AppComponent,
    DeptListComponent,
    EmployeeListComponent,
    AddDepartmentComponent,
    UpdateDeptComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
