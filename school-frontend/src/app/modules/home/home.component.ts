import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostService } from '../posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public $posts: Observable<Post[]>;

  constructor(private postService: PostService) {
    this.$posts = postService.findAll();
  }

  ngOnInit(): void {}
}
