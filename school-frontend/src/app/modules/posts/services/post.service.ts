import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { posts } from 'src/app/data';
import { Post } from 'src/app/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  findAll(page: number = 0): Observable<Post[]> {
    console.log(`Get posts of page ${page}`);
    return of(posts);
  }

  findOne(id: string): Observable<Post> {
    console.log(`Get user with id ${id}`);
    return of(posts[0]);
  }

  update(id: string, data: Partial<Post>): Observable<Post> {
    console.log(`Update user ${id} with new data`);
    console.log(data);
    return of(posts.filter((v) => v.id === id)[0]).pipe(
      catchError((_) => {
        throw 'Cannot found post with id ' + id;
      })
    );
  }
}
