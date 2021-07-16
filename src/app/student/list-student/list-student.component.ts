import { StudentService } from './../../shared/student.service';
import { APIFunctionService } from './../../shared/apifunction.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  allData: Student[];
  constructor(private sev: StudentService) {
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
