import { StudentService } from './../../shared/student.service';

import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent  {
  student: Student = new Student;
  id;
  constructor(private sev: StudentService, private activeRoute: ActivatedRoute
    , private router : Router ) {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.sev.getById(this.id).subscribe((data) => {
      this.student = data;
    })
  }
  update() {
    this.sev.put(this.student, this.id).subscribe((data) => {
      this.router.navigateByUrl('ls');
    })
  }

}
