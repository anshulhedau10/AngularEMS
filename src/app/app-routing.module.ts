import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateDeptComponent } from './update-dept/update-dept.component';

const routes: Routes = [
  {path: 'departments', component: DeptListComponent},
  {path: 'departments/add', component: AddDepartmentComponent},
  {path: 'departments/update/:id', component: UpdateDeptComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employees/add', component: AddEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
