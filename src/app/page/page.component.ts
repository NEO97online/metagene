import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PageService }  from './page.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  pages;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private pageService: PageService) { }

  ngOnInit() {

    // this.pageService.pages = this.route.paramMap
    //   .switchMap((params: ParamMap) =>
    //     this.pageService.getPages(params.get('id')));
    this.pageService.getPages().subscribe(pages => {
      this.pages = pages;
    })
  }

}
