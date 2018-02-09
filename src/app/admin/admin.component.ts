import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '@core/firestore.service';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '@core/auth.service';

declare let CKEDITOR;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private firestore: AngularFirestore, private auth: AuthService) { }

  ngOnInit() {
  }

  addNew() {
    const id = this.firestore.collection('posts').ref.doc().id;
    this.router.navigate([`/admin/edit/${id}`]);
  }

}
