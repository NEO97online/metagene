import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { AlkemeComponent } from './alkeme/alkeme.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from 'app/blog/blog.component';
import { BlogPostComponent } from 'app/blog/blog-post/blog-post.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPostsComponent } from 'app/admin/posts/posts.component';
import { AdminCreateComponent } from 'app/admin/create/create.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { state: 'home' } },
  { path: 'about', component: AboutComponent, data: { state: 'about' } },
  { path: 'services', component: ServicesComponent, data: { state: 'services' } },
  { path: 'alkeme', component: AlkemeComponent, data: { state: 'alkeme' } },
  { path: 'contact', component: ContactComponent, data: { state: 'contact' } },
  { path: 'blog', component: BlogComponent, data: { state: 'blog' } },
  { path: 'blog/:postId', component: BlogPostComponent, data: { state: 'blog' } },
  { path: 'admin', component: AdminComponent, data: { state: 'admin' },
    children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'posts', component: AdminPostsComponent },
      { path: 'edit/:postId', component: AdminCreateComponent },
      { path: '**', redirectTo: 'posts', pathMatch: 'full' },
    ] },
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
