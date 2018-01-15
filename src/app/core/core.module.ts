import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

import { environment } from '@environments/environment';

import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirestoreService } from './firestore.service';


@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [],
  providers: [AuthService, FirestoreService]
})
export class CoreModule { }
