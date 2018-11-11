import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navlink',
  template: `
  <li class="nav-item" [ngClass]="{'active': router.url === url}">
    <a class="nav-link" routerLink="{{ url }}">{{ name }}</a>
  </li>
  `,
  styleUrls: ['./navlink.component.scss']
})
export class NavlinkComponent implements OnInit {
  @Input() name: string;
  @Input() url: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
