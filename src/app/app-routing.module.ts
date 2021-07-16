import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { CraeteTeacherComponent } from './teacher/craete-teacher/craete-teacher.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "cs", component: CreateStudentComponent },
  { path: "ls", component: ListStudentComponent },
  { path: "ls/:id", component: UpdateStudentComponent },
  { path: "ct", component: CraeteTeacherComponent },
  { path: "lt", component: ListTeacherComponent },
  { path: "lt/:id", component: UpdateTeacherComponent },
  {path:"**" , component :NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
