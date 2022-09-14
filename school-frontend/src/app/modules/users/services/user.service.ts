import { Injectable } from '@angular/core';
import { Observable, of, catchError } from 'rxjs';
import { users } from 'src/app/data';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  findAll(page: number = 0): Observable<User[]> {
    console.log(`Get users of page ${page}`);
    return of(users);
  }

  findOne(id: string): Observable<User> {
    console.log(`Get user with id ${id}`);
    return of(users[0]);
  }

  update(id: string, data: Partial<User>): Observable<User> {
    console.log(`Update user ${id} with new data`);
    console.log(data);
    return of(users.filter((v) => v.id === id)[0]).pipe(
      catchError((_) => {
        throw 'Cannot found user with id ' + id;
      })
    );
  }

  disable(id: string): Observable<User> {
    console.log(`Disabling user ${id}`);
    return of(users[0]);
  }
}
