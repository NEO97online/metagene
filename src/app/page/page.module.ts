import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageService } from './page.service';
import { PageDetailComponent } from './page-detail/page-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageDetailComponent],
  providers: [PageService]
})
export class PageModule { }
