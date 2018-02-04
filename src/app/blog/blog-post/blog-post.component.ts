import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '@core/firestore.service';
import { Observable } from 'rxjs/Observable';
import { Post } from 'app/blog/post.interface';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  postId: string;
  data: Observable<Post>;

  constructor(private route: ActivatedRoute, private firestore: FirestoreService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params.postId;
      this.data = this.firestore.doc$(`posts/${this.postId}`);
    });
  }

}
