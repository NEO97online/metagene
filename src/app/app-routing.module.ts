import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { AlkemeComponent } from './alkeme/alkeme.component';
import { ContactComponent } from './contact/contact.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { state: 'home' } },
  { path: 'page', component: PageComponent, data: { state: 'page' } },
  { path: 'about', component: AboutComponent, data: { state: 'about' } },
  { path: 'services', component: ServicesComponent, data: { state: 'services' } },
  { path: 'alkeme', component: AlkemeComponent, data: { state: 'alkeme' } },
  { path: 'contact', component: ContactComponent, data: { state: 'contact' } },
  { path: '**', component: HomeComponent, data: { state: 'home' } },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
