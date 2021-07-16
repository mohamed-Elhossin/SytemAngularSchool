import { APIFunctionService } from './apifunction.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends APIFunctionService<Student> {

  constructor(http: HttpClient) {
    super("http://localhost:3000/students", http)
  }
  
}
