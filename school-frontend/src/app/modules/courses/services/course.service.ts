import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { courses } from 'src/app/data';
import { Course } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}

  findAll(page: number = 0): Observable<Course[]> {
    console.log(`Get course of page ${page}`);
    return of(courses);
  }

  findOne(id: string): Observable<Course> {
    console.log(`Get course with id ${id}`);
    return of(courses[0]);
  }

  update(id: string, data: Partial<Course>): Observable<Course> {
    console.log(`Update course ${id} with new data`);
    console.log(data);
    return of(courses.filter((v) => v.id === id)[0]).pipe(
      catchError((_) => {
        throw 'Cannot found course with id ' + id;
      })
    );
  }

  disable(id: string): Observable<Course> {
    console.log(`Disabling course ${id}`);
    return of(courses[0]);
  }
}
