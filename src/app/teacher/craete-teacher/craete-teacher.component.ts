import { TeacherService } from './../../shared/teacher.service';
import { Teacher } from './../../models/teacher';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-craete-teacher',
  templateUrl: './craete-teacher.component.html',
  styleUrls: ['./craete-teacher.component.css']
})
export class CraeteTeacherComponent implements OnInit {


  tacher : Teacher  = new Teacher();
  constructor(private sev : TeacherService , private router : Router ) { }

  ngOnInit(): void {
  }

   seve(){
       this.sev.post(this.tacher).subscribe((data : any)=>{
      this.router.navigateByUrl('lt');
       })
   }

}
