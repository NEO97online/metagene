import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '@core/firestore.service';
import { Router } from '@angular/router';

declare let CKEDITOR;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private firestore: FirestoreService) { }

  ngOnInit() {
  }

  addNew() {
    this.firestore.add('posts', {title: 'untitled'}).then(ref => {
      console.log(ref.id);
      this.router.navigate([`/admin/edit/${ref.id}`]);
    });
  }

}
