import { StudentService } from './../../shared/student.service';
import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

 student : Student  = new Student();
  constructor(private sev : StudentService , private router : Router ) { }

  ngOnInit(): void {
  }

   seve(){
       this.sev.post(this.student).subscribe((data : any)=>{
      this.router.navigateByUrl('ls');
       })
   }
}
