import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page.component';
import { PageDetailComponent } from './page-detail/page-detail.component';

const pageRoutes: Routes = [
  { path: 'page/:name', component: PageDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pageRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PageRoutingModule { }
