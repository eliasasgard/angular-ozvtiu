import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
    getCourses(){
      return ["course1", "courses2", "courses3"];
  }

  constructor() { }

}