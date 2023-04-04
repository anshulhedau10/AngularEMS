import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Department } from '../models/department';
import { Employee } from '../models/employee';
import { Gender } from '../models/gender';
import { DepartmentService } from '../services/department.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  empForm!: FormGroup;
  gender = Gender;
  deptList!: Department[];
  
  constructor(private empService: EmployeeService,
    private deptService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const datePipe = new DatePipe('en-US');
    //get emp id param
    let empId = this.route.snapshot.params['id'];
    console.log('Emp id : ' + empId);

    //get emp details by calling service and passing id
    this.empService.getById(empId).subscribe(emp => {
      this.empForm = new FormGroup({
        id: new FormControl(emp.id),
        name: new FormControl(emp.name, Validators.required),
        dateOfBirth: new FormControl(datePipe.transform(emp.dateOfBirth, 'yyyy-MM-dd'), Validators.required),
        gender: new FormControl(emp.gender, Validators.required),
        email: new FormControl(emp.email, [Validators.required, Validators.email]),
        mobileNo: new FormControl(emp.mobileNo, [Validators.required]),
        departmentId: new FormControl(emp.departmentId, Validators.required),
      });
    }, err => {
      alert(err);
      console.log(err);
    })

    this.deptService.getList().subscribe(list => {
      this.deptList = list;
      console.log(list);
    }, err =>  {
      console.log(err);
    });
  }

  onSubmit() {
    console.log(this.empForm);
    //service
    this.empService.update(this.empForm.value as unknown as Employee).subscribe(res =>  {
      alert('Employee updated sucessfully');
      //redirect to emp list
      this.router.navigate(['/employees']);
    }, err => {
      alert(err);
      console.log(err);
    })
  }

  isNumber(id:any) : boolean{
    return typeof id === 'number';
  }

  // getFormatedDate(date: Date, format: string) {
  //   const datePipe = new DatePipe('en-US');
  //   return datePipe.transform(date, format);
  // }


}
