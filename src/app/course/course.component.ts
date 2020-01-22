
import { Component, OnInit } from '@angular/core';
import {CourseService} from './course-service.service';


@Component({
  selector: 'app-courses',
  template: `<h2>{{title}}</h2>
              <ul>
                <li *ngFor="let course of courses">
                  {{course}}
                </li>
              </ul>`
  /*
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']*/
  
})

export class CourseComponent {

  title = "Courses";
  courses;
  constructor(service: CourseService) { 
    
    this.courses = service.getCourses();
  }


}
