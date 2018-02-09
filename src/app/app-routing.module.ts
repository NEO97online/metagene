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
import { AdminEditComponent } from 'app/admin/edit/edit.component';
import { AuthGuard } from '@core/auth.guard';
import { LoginComponent } from 'app/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { state: 'home' } },
  { path: 'about', component: AboutComponent, data: { state: 'about' } },
  { path: 'services', component: ServicesComponent, data: { state: 'services' } },
  { path: 'alkeme', component: AlkemeComponent, data: { state: 'alkeme' } },
  { path: 'contact', component: ContactComponent, data: { state: 'contact' } },
  { path: 'blog', component: BlogComponent, data: { state: 'blog' } },
  { path: 'blog/:postId', component: BlogPostComponent, data: { state: 'blog' } },
  { path: 'login', component: LoginComponent, data: { state: 'login' } },
  {
    path: 'admin', component: AdminComponent, data: { state: 'admin' }, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'posts', component: AdminPostsComponent },
      { path: 'edit/:postId', component: AdminEditComponent },
      { path: '**', redirectTo: 'posts', pathMatch: 'full' },
    ]
  },
  { path: '**', component: HomeComponent, data: { state: 'home' } },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
