import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }

  toggleMenu() {
    document.getElementById("nav-icon").classList.toggle('open');
    document.getElementById("mobile-nav").classList.toggle('open');
  }

}
