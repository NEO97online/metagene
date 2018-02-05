import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '@core/firestore.service';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

declare let CKEDITOR;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  addNew() {
    const id = this.firestore.collection('posts').ref.doc().id;
    this.router.navigate([`/admin/edit/${id}`]);
  }

}
