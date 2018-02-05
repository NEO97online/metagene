import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '@core/firestore.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class AdminPostsComponent implements OnInit {

  posts: Observable<any[]>;
  loading: boolean;

  constructor(private firestore: FirestoreService, private router: Router) { }

  ngOnInit() {
    this.posts = this.firestore.colWithIds$('posts');
    this.loading = true;
    this.posts.take(1).subscribe(_ => this.loading = false);
  }

  edit(id: string) {
    this.router.navigate([`/admin/edit`, id]);
  }

  delete(id: string) {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      this.firestore.delete(`posts/${id}`);
    }
  }

}
