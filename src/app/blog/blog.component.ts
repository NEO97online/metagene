import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '@core/firestore.service';
import { Post } from 'app/blog/post.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(private firestore: FirestoreService) { }

  ngOnInit() {
    this.posts = this.firestore.colWithIds$('posts', ref => ref.where('published', '==', true).orderBy('createdAt'));
  }

}
