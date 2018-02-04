import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '@core/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  firstName: string;
  email: string;
  message: string;

  constructor(private router: Router, private firestore: FirestoreService) { }

  ngOnInit() {
  }

  submit() {
    this.firestore.add('contactForms', {
      firstName: this.firstName,
      email: this.email,
      message: this.message
    });
    window.alert('Thank you for submitting!');
    this.router.navigate(['/home']);
  }

}
