import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-update-dept',
  templateUrl: './update-dept.component.html',
  styleUrls: ['./update-dept.component.css']
})
export class UpdateDeptComponent implements OnInit {
  deptForm!: FormGroup;

  constructor(private deptService: DepartmentService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get dept id param
    let deptId = this.route.snapshot.params['id'];
    console.log('Dept id' + deptId);

    //get dept details y calling service, id
    this.deptService.getById(deptId).subscribe(dept => {
      this.deptForm = new FormGroup({
        "id": new FormControl(dept.id),
        "name": new FormControl(dept.name, Validators.required)
      });
    }, err => {
      alert(err);
      console.log(err);
    })

  }

  onSubmit() {
    console.log(this.deptForm);
    //service
    this.deptService.update(this.deptForm.value as unknown as Department).subscribe(res =>  {
      alert('Department updated sucessfully');
      //redirect to dept list
      this.router.navigate(['/departments']);
    }, err => {
      alert(err);
      console.log(err);
    })
  }
}
