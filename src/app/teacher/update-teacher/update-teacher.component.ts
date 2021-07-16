import { TeacherService } from './../../shared/teacher.service';
import { Teacher } from './../../models/teacher';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent  {


  teacher: Teacher = new Teacher;
  id;
  constructor(private sev: TeacherService, private activeRoute: ActivatedRoute
    , private router : Router ) {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.sev.getById(this.id).subscribe((data) => {
      this.teacher = data;
    })
  }

  update() {
    this.sev.put(this.teacher, this.id).subscribe((data) => {
      this.router.navigateByUrl('lt');
    })
  }

}
