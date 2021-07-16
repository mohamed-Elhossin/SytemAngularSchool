import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './genral/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { CraeteTeacherComponent } from './teacher/craete-teacher/craete-teacher.component';
import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListStudentComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    ListTeacherComponent,
    CraeteTeacherComponent,
    UpdateTeacherComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
