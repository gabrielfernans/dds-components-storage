import { BreadcrumbComponent } from './../../../lib/breadcrumb/breadcrumb.component';
import { Event, NavigationEnd, Router } from '@angular/router';
import {
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ISidenavItem } from '../../models/sidenav.model';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  @ViewChild(`breadcrumb`) breadcrumb!: BreadcrumbComponent;
  public menuTags: Array<string> = [];
  public menuSorted: Array<any> = [];
  public menuItems: any = MENU_ITEMS;
  public bcData: any = [
    {
      name: 'home',
      link: '/',
    },
  ];
  public bcIcon: any = 'home';
  public currentRoute: any;
  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.currentRoute = '';
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.bcData = [this.bcData[0]];
        this.currentRoute = event.url.replace('/', '');
        this.bcIcon = this.currentRoute === '' ? 'home' : this.currentRoute;
        this.bcData =
          this.currentRoute === ''
            ? [
                ...this.bcData,
                {
                  name: `Home page`,
                  link: `/`,
                },
              ]
            : [
                ...this.bcData,
                {
                  name: `${
                    this.currentRoute.charAt(0).toUpperCase() +
                    this.currentRoute.slice(1)
                  }`,
                  link: `/${this.currentRoute}`,
                },
              ];

        this.breadcrumb.data = this.bcData;
      }
    });
  }

  ngOnInit(): void {}
}

const MENU_ITEMS: ISidenavItem[] = [
  {
    title: 'Home',
    route: '/',
    type: 'group',
    expanded: false,
    icon: 'home',
  },
  {
    title: 'Components',
    route: '',
    type: 'group',
    expanded: false,
    icon: 'objects',
    childs: [
      {
        title: 'Pagination',
        route: 'pagination',
        type: 'page',
        expanded: false,
      },
      {
        title: 'Button',
        route: 'button',
        type: 'page',
        expanded: false,
      },
    ],
  },
  {
    title: 'Search group',
    type: 'group',
    icon: 'search',
    expanded: false,
    childs: [
      {
        title: 'Search sub-group',
        type: 'group',
        icon: 'search',
        expanded: false,
        childs: [
          {
            title: 'Search page',
            route: 'search',
            type: 'page',
            expanded: false,
          },
        ],
      },
    ],
  },
];
