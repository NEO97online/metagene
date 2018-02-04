import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FirestoreService } from '@core/firestore.service';

declare let CKEDITOR;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class AdminCreateComponent implements OnInit {

  post: Observable<any>;

  constructor(private route: ActivatedRoute, private firestore: FirestoreService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const postId = params.postId;
      this.post = this.firestore.doc$(`posts/${postId}`);
    });
    CKEDITOR.replace('editor1');
  }

}
