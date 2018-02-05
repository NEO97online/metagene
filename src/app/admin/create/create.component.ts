import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FirestoreService } from '@core/firestore.service';
import { Post } from 'app/blog/post.interface';
import { StorageService } from '@core/storage.service';

declare let CKEDITOR;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class AdminCreateComponent implements OnInit {

  post: Observable<any>;
  postId: string;
  title: string;
  content: string;
  @ViewChild('files') fileInput: ElementRef;
  loadingPhoto: boolean;
  loading: boolean;
  coverPhotoUrl: string;

  constructor(private route: ActivatedRoute, private firestore: FirestoreService, private storage: StorageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params.postId;
      this.post = this.firestore.doc$(`posts/${this.postId}`);
      this.loading = true;
      this.post.take(1).subscribe(_ => {
        this.loading = false;
        CKEDITOR.replace('editor1', {
          height: 600
        });
      });
    });
  }

  publish() {
    if (!this.title || this.title === '') {
      window.alert('You need to enter a title!');
      return;
    }
    const data = CKEDITOR.instances.editor1.getData();
    if (!data || data === '') {
      window.alert('You need to enter some post content!');
      return;
    }
    this.firestore.set<Post>(`posts/${this.postId}`, {
      title: this.title,
      body: data,
      published: true,
      coverPhotoUrl: this.coverPhotoUrl
    });
  }

  uploadFile(file: File) {
    if (!file) {
      return;
    }
    this.loadingPhoto = true;
    this.storage.uploadFile(`posts/${this.postId}/cover-${file.name}`, file)
      .then(snapshot => {
        this.coverPhotoUrl = snapshot.downloadURL;
        this.loadingPhoto = false;
      });
  }

}
