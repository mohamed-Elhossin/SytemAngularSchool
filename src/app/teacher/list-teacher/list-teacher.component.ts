import { TeacherService } from './../../shared/teacher.service';
import { Teacher } from './../../models/teacher';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {


  allData: Teacher[];
  constructor(private sev: TeacherService) {
    this.sev.get().subscribe((data: any) => {
      this.allData = data
    })
  }

  ngOnInit(): void {
  }

  delete(id) {
    this.sev.delete(id).subscribe((data) => {
      location.reload();
    })
  }
}
