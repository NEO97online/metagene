import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from '@core/core.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ServicesComponent } from './services/services.component';
import { AlkemeComponent } from './alkeme/alkeme.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { EbookDialogComponent } from './ebook-dialog/ebook-dialog.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPostsComponent } from './admin/posts/posts.component';
import { AdminEditComponent } from './admin/edit/edit.component';
import { SafeHtml } from './core/safe-html.pipe';
import { AuthGuard } from '@core/auth.guard';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent,
    ServicesComponent,
    AlkemeComponent,
    ContactComponent,
    BlogComponent,
    BlogPostComponent,
    EbookDialogComponent,
    AdminComponent,
    AdminPostsComponent,
    AdminEditComponent,
    SafeHtml,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
