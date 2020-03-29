import {Injectable} from '@angular/core';


@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/huigao1/courses`)
      .then(response => response.json());
  findCourseById = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/huigao1/courses/${courseId}`)
      .then((response => response.json()));
  findLessonForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/huigao1/modules/${moduleId}/lessons`)
      .then(response => response.json());
  findModuleForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/huigao1/courses/${courseId}/modules`)
      .then(response => response.json());
}
